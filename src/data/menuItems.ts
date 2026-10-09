export type MenuEntry = {
  label: string
  /** hand-placed horizontal offset, in em, to fake the scattered P3 layout */
  indent: number
  /** per-item size multiplier */
  scale: number
  /** baseline tilt in degrees — deliberately uneven, like the game's hand-set type */
  rot: number
  /** glyph lean in degrees, also varied per row */
  skew: number
  /** cyan shade for this row — kept within a narrow band so rows read as one set */
  tint: string
  /** row opacity, another small nudge in apparent brightness */
  alpha: number
  /** route this row opens; rows without one are inert for now */
  to?: string
}

export const MENU_ITEMS: MenuEntry[] = [
  {
    label: 'ABOUT',
    indent: 0.35,
    scale: 0.98,
    rot: -6,
    skew: -19,
    tint: '#52e8ff',
    alpha: 1.0,
    to: '/about',
  },
  {
    label: 'PROJECT',
    indent: 0.25,
    scale: 0.98,
    rot: -9,
    skew: -18,
    tint: '#41d7f4',
    alpha: 0.98,
    to: '/projects',
  },
  {
    label: 'SKILL',
    indent: 0.55,
    scale: 0.97,
    rot: -12,
    skew: -21,
    tint: '#35cbee',
    alpha: 0.96,
    to: '/skills',
  },
  {
    label: 'EXPERIENCE',
    indent: 0.15,
    scale: 0.91,
    rot: -7,
    skew: -20,
    tint: '#50e1f9',
    alpha: 1.0,
    to: '/experience',
  },
  {
    label: 'CONTACT',
    indent: 0.30,
    scale: 0.96,
    rot: -10,
    skew: -19,
    tint: '#2fbcd9',
    alpha: 0.98,
    to: '/contact',
  },
]
