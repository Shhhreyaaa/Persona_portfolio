/* Skills and Toolbox for Shreya Somi */

const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`

export type SkillCategory = {
  tag: string
  title: string
  summary: string
  items: string[]
  proficiency: string
  description: string
  imageSrc: string
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    tag: 'GAME',
    title: 'Game Development',
    summary: 'Unity · Unreal · Blender · C# · WebGL',
    items: [
      'Unity',
      'Unreal',
      'Blender',
      'C#',
      'UI Toolkit',
      'DOTween',
      'Java',
      'Swing',
      'WebGL',
      'WebSockets',
      'Playstore/AppleStore Deployment',
    ],
    proficiency: 'Core Specialization',
    description:
      'Designing and engineering real-time 2D/3D games, Newtonian physics mechanics, diegetic HUD systems, custom HLSL shaders, procedural generation, networked WebSockets, and cross-platform mobile store releases.',
    imageSrc: head(1),
  },
  {
    tag: 'AI/ML',
    title: 'AI · ML',
    summary: 'Python · Scikit-learn · CV · AI Agents',
    items: [
      'Python',
      'Scikit-learn',
      'Random Forest',
      'Computer Vision',
      'Local Models',
      'OpenCode',
      'Personalised AI agents',
    ],
    proficiency: 'Applied Intelligence',
    description:
      'Developing data-driven predictive models, computer vision systems, locally hosted LLMs, multi-agent frameworks, semantic vector retrieval (RAG), and personalized autonomous AI assistants.',
    imageSrc: head(2),
  },
  {
    tag: 'WEB',
    title: 'Web · Backend',
    summary: 'Frontend · Backend · Cloud · APIs',
    items: [
      'Frontend',
      'Backend',
      'Git',
      'Supabase',
      'Firebase',
      'AWS',
      'Android',
      'Cloudflare',
      'all_Authentications',
      'API',
    ],
    proficiency: 'Full-Stack & Cloud',
    description:
      'Architecting resilient modern web and mobile ecosystems, secure database telemetry, Row Level Security (RLS), serverless backends, edge delivery with Cloudflare, and robust REST APIs.',
    imageSrc: head(3),
  },
  {
    tag: 'XR',
    title: 'Design · XR',
    summary: 'Blender · UI/UX · Figma · XR · AutoCAD',
    items: [
      'Blender',
      'UI/UX',
      'Figma',
      'Adobe Creative Suite',
      'XR',
      'AutoCAD',
    ],
    proficiency: 'Creative & Spatial',
    description:
      'Crafting high-fidelity interactive user interfaces, intuitive UX design systems, 3D modeling, spatial computing / extended reality (XR) environments, and precision technical drafting.',
    imageSrc: head(4),
  },
]
