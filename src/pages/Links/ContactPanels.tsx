import { useState, useEffect } from 'react'
import { playSfx } from '../../utils/sfx'
import './ContactPanels.css'

/* =========================================================================
   1. Contact Email Form (Screenshot 2)
   ========================================================================= */
export const ContactEmailForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sentStatus, setSentStatus] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    playSfx('activate')
    setIsSubmitting(true)
    setSentStatus('Sending message to shreyasomi775@gmail.com...')
    setIsSuccess(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/shreyasomi775@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company: company || 'Not specified',
          projectType: projectType || 'General Inquiry',
          message,
          _subject: `New Portfolio Message from ${name} (${projectType || 'General'})`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSuccess(true)
        setSentStatus('✓ Message sent successfully to shreyasomi775@gmail.com!')
        setName('')
        setEmail('')
        setCompany('')
        setProjectType('')
        setMessage('')
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch {
      // Fallback to mailto if direct submission is blocked by browser/adblocker
      const subjectText = `Portfolio Inquiry: ${projectType || 'Opportunity'} from ${name || 'Visitor'}`
      const bodyText = [
        `Hi Shreya,`,
        ``,
        `Name: ${name || 'N/A'}`,
        `Email: ${email || 'N/A'}`,
        `Company: ${company || 'N/A'}`,
        `Project Type: ${projectType || 'N/A'}`,
        ``,
        `Message:`,
        message || '(No message content provided)',
        ``,
        `Sent via Portfolio Contact Form`,
      ].join('\n')

      const mailtoUrl = `mailto:shreyasomi775@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`
      setIsSuccess(false)
      setSentStatus('Network error. Opening your default mail client...')
      window.location.href = mailtoUrl
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <input
          type="text"
          className="contact-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="contact-form-row">
        <input
          type="text"
          className="contact-input"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <select
          className="contact-select"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <option value="">Project Type</option>
          <option value="Game Development (Unity/Unreal)">Game Development (Unity/Unreal)</option>
          <option value="AI / ML Engineering">AI / ML Engineering</option>
          <option value="Full-Stack Web & Backend">Full-Stack Web & Backend</option>
          <option value="AR / VR / XR Experience">AR / VR / XR Experience</option>
          <option value="Internship / Full-time Role">Internship / Full-time Role</option>
          <option value="Consulting / Other">Consulting / Other</option>
        </select>
      </div>

      <textarea
        className="contact-textarea"
        placeholder="Tell us about your idea..."
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <div className="contact-form-footer">
        <button type="submit" className="contact-send-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {sentStatus ? (
          <span
            className="contact-form-status"
            style={{ color: isSuccess ? '#4effb0' : '#59d8f2' }}
          >
            {sentStatus}
          </span>
        ) : (
          <span className="contact-form-status">Direct to: shreyasomi775@gmail.com</span>
        )}
      </div>
    </form>
  )
}

/* =========================================================================
   2. LinkedIn Floating Profile Card (Screenshot 3)
   ========================================================================= */
export const LinkedInCard = () => {
  const profileUrl = 'https://www.linkedin.com/in/shreyasomi77/'

  return (
    <div className="linkedin-float-card">
      <img
        src={`${import.meta.env.BASE_URL}assets/linkedin_banner.png`}
        alt="LinkedIn Banner"
        className="linkedin-banner"
      />
      <div className="linkedin-content">
        <div className="linkedin-avatar-row">
          <img
            src={`${import.meta.env.BASE_URL}assets/shreya_avatar.png`}
            alt="Shreya Somi Avatar"
            className="linkedin-avatar"
          />
          <div className="linkedin-top-badges">
            <span>🎓 Google Student Ambassador</span>
            <span>🏛️ Centurion University of Technology and Management</span>
          </div>
        </div>

        <div className="linkedin-name-row">
          <h3 className="linkedin-name">Shreya Somi</h3>
          <span className="linkedin-badge-verified" title="Verified">✓</span>
          <span className="linkedin-pronouns">She/Her</span>
        </div>

        <p className="linkedin-headline">
          Full-Stack & Backend Developer | Google Student Ambassador | GSSoC 2026 Ambassador & Open Source Contributor
        </p>

        <div className="linkedin-location-row">
          <span>Bokaro Steel City, India · </span>
          <a href={profileUrl} target="_blank" rel="noreferrer" onClick={() => playSfx('activate')}>
            Contact info
          </a>
        </div>

        <div className="linkedin-connections">500+ connections</div>

        <div className="linkedin-buttons">
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn-primary"
            onClick={() => playSfx('activate')}
          >
            View Profile ↗
          </a>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn-secondary"
            onClick={() => playSfx('activate')}
          >
            Connect
          </a>
        </div>

        <div className="linkedin-open-card">
          <div className="linkedin-open-title">Open to work · Everyone on LinkedIn</div>
          <div className="linkedin-open-sub">Bhubaneswar | On-site · Hybrid · Remote</div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   3. GitHub Live Contributions & Real-time Repos (Screenshot 4)
   ========================================================================= */
type RepoInfo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
}

const FALLBACK_REPOS: RepoInfo[] = [
  {
    name: 'Castle-Run',
    html_url: 'https://github.com/Shhhreyaaa/Castle-Run',
    description: '2D endless runner arcade game in Unity for Android devices.',
    language: 'C#',
    stargazers_count: 1,
  },
  {
    name: 'KittyFly',
    html_url: 'https://github.com/Shhhreyaaa/KittyFly',
    description: '2.5D Precision Newtonian spacecraft simulator with URP VFX.',
    language: 'C#',
    stargazers_count: 1,
  },
  {
    name: 'CHAUKA-BARA',
    html_url: 'https://github.com/Shhhreyaaa/CHAUKA-BARA',
    description: 'Heritage strategy board game with Expectiminimax AI & procedural audio.',
    language: 'JavaScript',
    stargazers_count: 1,
  },
  {
    name: 'AI-Calorie-Tracker',
    html_url: 'https://github.com/Shhhreyaaa/AI-Calorie-Tracker',
    description: 'Multimodal vision nutrition companion powered by Gemini Vision.',
    language: 'TypeScript',
    stargazers_count: 1,
  },
]

export const GitHubLiveCard = () => {
  const profileUrl = 'https://github.com/Shhhreyaaa'
  const [repos, setRepos] = useState<RepoInfo[]>(FALLBACK_REPOS)
  const [graphFailed, setGraphFailed] = useState(false)

  // Real-time live fetch of latest public repositories from GitHub
  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/Shhhreyaaa/repos?sort=updated&per_page=4')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: any[]) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setRepos(
            data.slice(0, 4).map((r) => ({
              name: r.name,
              html_url: r.html_url,
              description: r.description || 'Public GitHub project',
              language: r.language || 'Code',
              stargazers_count: r.stargazers_count || 0,
            }))
          )
        }
      })
      .catch(() => {
        // Keep fallback on rate limit or offline
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="github-live-card">
      <div className="github-header-row">
        <span className="github-stats-pill">
          ● 205 contributions in the last year
        </span>
        <span style={{ fontSize: '0.82rem', color: '#a4b4cb' }}>Live GitHub Sync</span>
      </div>

      {/* Real-time GitHub contribution graph */}
      <div className="github-graph-wrapper">
        <img
          src={
            graphFailed
              ? `${import.meta.env.BASE_URL}assets/github_graph.png`
              : 'https://ghchart.rshah.org/216e39/Shhhreyaaa'
          }
          alt="Shhhreyaaa's Real-time GitHub Activity"
          className="github-graph-img"
          onError={() => setGraphFailed(true)}
        />
      </div>

      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#59d8f2', marginTop: '0.2rem' }}>
        Latest Live Repositories (Auto-sync with GitHub)
      </div>

      <div className="github-repos-grid">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="github-repo-card"
            onClick={() => playSfx('activate')}
          >
            <div className="github-repo-title">{repo.name}</div>
            <div className="github-repo-desc">{repo.description}</div>
            <div style={{ fontSize: '0.75rem', color: '#3fb950', marginTop: 'auto' }}>
              ● {repo.language}
            </div>
          </a>
        ))}
      </div>

      <div className="github-action-row">
        <span style={{ fontSize: '0.82rem', color: '#8899aa' }}>github.com/Shhhreyaaa</span>
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="github-open-btn"
          onClick={() => playSfx('activate')}
        >
          View GitHub Profile ↗
        </a>
      </div>
    </div>
  )
}
