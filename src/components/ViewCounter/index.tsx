import { useEffect, useState } from 'react'
import './ViewCounter.css'

const STORAGE_KEY = 'p3_portfolio_views'
const BADGE_URL = 'https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fpersona-portfolio-dun.vercel.app'

export const ViewCounter = () => {
  const [count, setCount] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const val = parseInt(saved, 10)
        if (!isNaN(val) && val > 0) return val
      }
    } catch {}
    return null
  })

  useEffect(() => {
    let cancelled = false
    const fetchCount = async () => {
      try {
        const res = await fetch(BADGE_URL, { cache: 'no-store' })
        if (!res.ok) return
        const svgText = await res.text()
        const match = svgText.match(/VISITORS:\s*([0-9,]+)/i)
        if (match && !cancelled) {
          const parsed = parseInt(match[1].replace(/,/g, ''), 10)
          if (!isNaN(parsed) && parsed > 0) {
            setCount(parsed)
            try {
              localStorage.setItem(STORAGE_KEY, parsed.toString())
            } catch {}
          }
        }
      } catch {
        // Fallback to local increment if network blocked
        setCount((prev) => {
          const next = (prev || 120) + 1
          try {
            localStorage.setItem(STORAGE_KEY, next.toString())
          } catch {}
          return next
        })
      }
    }

    void fetchCount()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="view-counter" title="Total portfolio views">
      <span className="view-counter-dot" aria-hidden="true" />
      <span className="view-counter-label">Views</span>
      <span className="view-counter-number">
        {count !== null ? count.toLocaleString() : '...'}
      </span>
    </div>
  )
}
