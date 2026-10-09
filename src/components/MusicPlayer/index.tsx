import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { playbackControlProps, useMusicPlayer } from '../../hooks/MusicPlayer'
import { SpeakerIcon } from './SpeakerIcon'
import { Waveform } from './Waveform'
import './MusicPlayer.css'

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export const MusicPlayer = () => {
  const {
    track,
    playing,
    currentTime,
    duration,
    toggle,
    next,
    prev,
    seek,
    volume,
    setVolume,
    muted,
    toggleMute,
  } = useMusicPlayer()
  const ratio = duration > 0 ? currentTime / duration : 0

  const playerRef = useRef<HTMLDivElement>(null)
  const [isMinimized, setIsMinimized] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 768
  })
  const [position, setPosition] = useState<{ x: number; y: number } | null>(() => {
    try {
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return null
      }
      const saved = localStorage.getItem('p3_music_pos')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          return {
            x: Math.max(10, Math.min(window.innerWidth - 260, parsed.x)),
            y: Math.max(10, Math.min(window.innerHeight - 170, parsed.y)),
          }
        }
      }
    } catch {}
    return null
  })

  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{
    startX: number
    startY: number
    initialLeft: number
    initialTop: number
  } | null>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return

    const target = e.target as HTMLElement
    // Ignore interactive controls: buttons, range sliders, scrub track
    if (
      target.closest('button') ||
      target.closest('input') ||
      target.closest('.music-player-scrub')
    ) {
      return
    }

    const playerEl = playerRef.current
    if (!playerEl) return

    const rect = playerEl.getBoundingClientRect()
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialLeft: rect.left,
      initialTop: rect.top,
    }
    setIsDragging(true)
    playerEl.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStartRef.current) return
    const dx = e.clientX - dragStartRef.current.startX
    const dy = e.clientY - dragStartRef.current.startY
    const newLeft = dragStartRef.current.initialLeft + dx
    const newTop = dragStartRef.current.initialTop + dy

    const playerEl = playerRef.current
    const w = playerEl ? playerEl.offsetWidth : 256
    const h = playerEl ? playerEl.offsetHeight : 160
    const clampedX = Math.max(8, Math.min(window.innerWidth - w - 8, newLeft))
    const clampedY = Math.max(8, Math.min(window.innerHeight - h - 8, newTop))

    const newPos = { x: clampedX, y: clampedY }
    setPosition(newPos)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false)
      dragStartRef.current = null
      try {
        playerRef.current?.releasePointerCapture(e.pointerId)
      } catch {}
      if (position && window.innerWidth > 768) {
        try {
          localStorage.setItem('p3_music_pos', JSON.stringify(position))
        } catch {}
      }
    }
  }

  // Handle window resize to keep player within viewport bounds
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPosition(null)
        return
      }
      setPosition((prev) => {
        if (!prev) return null
        const w = playerRef.current?.offsetWidth || 256
        const h = playerRef.current?.offsetHeight || 160
        return {
          x: Math.max(8, Math.min(window.innerWidth - w - 8, prev.x)),
          y: Math.max(8, Math.min(window.innerHeight - h - 8, prev.y)),
        }
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const style: CSSProperties = position
    ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: 'auto',
        bottom: 'auto',
      }
    : {}

  if (isMinimized) {
    return (
      <div
        ref={playerRef}
        className={`music-player music-player--mini${isDragging ? ' is-dragging' : ''}`}
        style={style}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={() => {
          if (!isDragging) setIsMinimized(false)
        }}
        title="Tap to open music controls • Drag to move"
      >
        <div className="music-player-mini-content">
          <span className="music-player-mini-icon">{playing ? '🔊' : '🔈'}</span>
          <span className="music-player-mini-title">{track.title}</span>
          <button
            type="button"
            className="music-player-mini-toggle"
            onClick={(e) => {
              e.stopPropagation()
              toggle()
            }}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? '❚❚' : '▶'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={playerRef}
      className={`music-player${isDragging ? ' is-dragging' : ''}`}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      title="Click and drag to reposition anywhere on the screen"
    >
      <div className="music-player-header">
        <span className="music-player-eyebrow">Now Playing</span>
        <div className="music-player-header-actions">
          <span className="music-player-drag-badge" title="Click and drag to move">
            ⠿ DRAG
          </span>
          <button
            type="button"
            className="music-player-minimize-btn"
            onClick={(e) => {
              e.stopPropagation()
              setIsMinimized(true)
            }}
            title="Minimize player"
            aria-label="Minimize"
          >
            ⎯
          </button>
        </div>
      </div>
      <span className="music-player-title">{track.title}</span>

      <Waveform />

      <div
        className="music-player-scrub"
        role="slider"
        tabIndex={0}
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(ratio * 100)}
        onClick={(e) => {
          const bar = e.currentTarget.getBoundingClientRect()
          seek((e.clientX - bar.left) / bar.width)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') seek(ratio - 0.05)
          if (e.key === 'ArrowRight') seek(ratio + 0.05)
        }}
      >
        <span className="music-player-scrub-fill" style={{ width: `${ratio * 100}%` }} />
      </div>

      <div className="music-player-row">
        <div className="music-player-controls">
          <button type="button" onClick={prev} aria-label="Previous track">
            &#9664;&#9664;
          </button>
          <button
            type="button"
            className="is-primary"
            onClick={toggle}
            aria-label={playing ? 'Pause' : 'Play'}
            {...playbackControlProps}
          >
            {playing ? <>&#10074;&#10074;</> : <>&#9654;</>}
          </button>
          <button type="button" onClick={next} aria-label="Next track">
            &#9654;&#9654;
          </button>
        </div>

        <span className="music-player-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="music-player-volume">
        <button
          type="button"
          className="music-player-mute"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          aria-pressed={muted}
        >
          <SpeakerIcon muted={muted || volume === 0} />
        </button>

        <input
          className="music-player-volume-slider"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={(e) => setVolume(e.currentTarget.valueAsNumber)}
          onPointerUp={(e) => e.currentTarget.blur()}
          aria-label="Volume"
          style={{ '--level': `${(muted ? 0 : volume) * 100}%` } as CSSProperties}
        />
      </div>
    </div>
  )
}
