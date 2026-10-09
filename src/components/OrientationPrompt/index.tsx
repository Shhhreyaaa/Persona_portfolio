import { useState, useEffect } from 'react'
import './OrientationPrompt.css'

export const OrientationPrompt = () => {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('p3_orient_dismissed') === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (dismissed) {
      setShow(false)
      return
    }

    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 820
      const isPortrait = window.innerHeight > window.innerWidth
      setShow(isMobile && isPortrait)
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [dismissed])

  if (!show) return null

  const handleDismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem('p3_orient_dismissed', 'true')
    } catch {}
  }

  return (
    <div className="orientation-prompt">
      <span className="orientation-prompt-icon" aria-hidden="true">
        📱
      </span>
      <span className="orientation-prompt-text">
        Rotate to <strong>Landscape</strong> for full P3R view!
      </span>
      <button
        type="button"
        className="orientation-prompt-dismiss"
        onClick={handleDismiss}
        aria-label="Dismiss orientation prompt"
      >
        ✕
      </button>
    </div>
  )
}
