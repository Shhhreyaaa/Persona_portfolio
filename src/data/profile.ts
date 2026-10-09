/* Projects and Contacts for Shreya Somi */

const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`

export type Link = { label: string; url: string }

export type Project = {
  /** ribbon on the row's left edge */
  tag: string
  title: string
  summary: string
  stack: string[]
  highlights: string[]
  links: Link[]
  /** small print under the highlights */
  note?: string
  imageSrc: string
}

export const PROJECTS: Project[] = [
  {
    tag: 'Castle Run',
    title: 'Castle Run',
    summary: '2D endless runner mobile arcade game with dynamic difficulty scaling',
    stack: ['Unity', 'C#', 'Android SDK', 'Mobile Touch Controls', 'Physics 2D'],
    highlights: [
      '2D endless runner mobile arcade game in Unity & C# optimized for smooth Android performance.',
      'Dynamic procedural obstacle generation with progressive difficulty curves to test reflexes.',
      'Responsive mobile touch controls, state management, and real-time score tracking.',
    ],
    links: [
      { label: 'Open on GitHub', url: 'https://github.com/Shhhreyaaa/Castle-Run' },
      { label: 'Download APK', url: 'https://drive.google.com/file/d/1O_DgdPhwdHRRxMsZfJspmx2PnLJiOemN/view?usp=sharing' },
    ],
    note: 'Built with Unity & C# · Playable Android APK build.',
    imageSrc: head(1),
  },
  {
    tag: 'KittyFly',
    title: 'KittyFly',
    summary: '2.5D precision Newtonian spacecraft simulator with telemetry & custom VFX',
    stack: ['Unity 6', 'C#', 'URP 17.6', 'ShaderLab / HLSL', 'Rigidbody Physics', 'Input System'],
    highlights: [
      '2.5D spacecraft simulator built on Newtonian Rigidbody physics, momentum drift, and thruster dynamics.',
      'Diegetic cybernetic HUD displaying real-time velocity, burn gauge, and hazard proximity alerts.',
      'Custom HLSL shaders and multi-layer URP particle visual effects across multi-sector campaigns.',
    ],
    links: [
      { label: 'Open on GitHub', url: 'https://github.com/Shhhreyaaa/KittyFly' },
    ],
    note: 'Built with Unity 6000.6, URP 17.6, and the modern Unity Input System.',
    imageSrc: head(2),
  },
  {
    tag: 'Chauka Bara',
    title: 'Chauka Bara',
    summary: 'Ancient Indian heritage strategy board game with Expectiminimax AI & procedural audio',
    stack: ['HTML5 Canvas', 'JavaScript (ES6+)', 'CSS3 Glassmorphism', 'Web Audio API', 'Expectiminimax AI'],
    highlights: [
      'Digital recreation of ancient Indian cowrie shell strategy race game (CUTM specifications).',
      '1-Ply Expectiminimax AI computing exact natural cowrie probability distributions (P(1)..P(8)).',
      'Procedural Web Audio API sound synthesizer with zero external assets & 6-language vernacular localization.',
    ],
    links: [
      { label: 'Open on GitHub', url: 'https://github.com/Shhhreyaaa/CHAUKA-BARA' },
    ],
    note: 'Zero-dependency implementation with authentic probability engine and procedural audio.',
    imageSrc: head(3),
  },
  {
    tag: 'AI Calorie Tracker',
    title: 'AI Calorie Tracker',
    summary: 'Multimodal vision nutrition companion & macro tracking platform',
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'End-to-end AI nutrition platform using Google Gemini Vision to recognize foods from photos and compute macros.',
      'Interactive AI Coach delivering personalized meal plans, dietary advice, and goal coaching.',
      'Health telemetry with streak tracking, interactive macro dashboards, and Supabase PostgreSQL RLS.',
    ],
    links: [
      { label: 'Open on GitHub', url: 'https://github.com/Shhhreyaaa/AI-Calorie-Tracker' },
      { label: 'Live Demo', url: 'https://myaicalorietracker.vercel.app' },
    ],
    note: 'Production SaaS powered by Next.js 15 and Gemini Vision AI.',
    imageSrc: head(4),
  },
  {
    tag: 'RAG Research Lab',
    title: 'RAG Research Lab',
    summary: 'Scientific literature Q&A platform with source-grounded vector retrieval',
    stack: ['Python', 'LangChain', 'FAISS', 'Google Gemini', 'Hugging Face', 'Streamlit'],
    highlights: [
      'Retrieval-Augmented Generation (RAG) platform to ingest, parse, and semantically query academic papers.',
      'Intelligent document chunking with configurable token windows (256/512/1024) and FAISS vector indexing.',
      'Synthesizes source-grounded answers via Google Gemini with page-level citations.',
    ],
    links: [
      { label: 'Open on GitHub', url: 'https://github.com/Shhhreyaaa/Research_prj' },
    ],
    note: 'End-to-end scientific literature search with hallucination-free LLM extraction.',
    imageSrc: head(5),
  },
  {
    tag: 'Indian Food Explorer',
    title: 'Indian Food Explorer',
    summary: 'Regional cuisine exploratory analytics dashboard & flavor profiler',
    stack: ['Python', 'Streamlit', 'Pandas', 'PostgreSQL', 'Matplotlib'],
    highlights: [
      'Designed an interactive exploratory data dashboard mapping traditional Indian recipes across geographic regions, flavor profiles, and diets.',
      'Optimized PostgreSQL queries and database indexing, reducing data retrieval latency by 45% for real-time filtering.',
      'Engineered comprehensive nutritional distributions and statistical visualizations for vegetarian and non-vegetarian classifications.',
      'Deployed an intuitive Streamlit interface featuring ingredient search, preparation time analytics, and recipe discovery.',
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Shhhreyaaa/Indian-Food-Explorer' },
    ],
    note: 'Database-backed analytics with optimized indexing and responsive data visualizations.',
    imageSrc: head(6),
  },
]

export type Contact = { tag: string; title: string; handle: string; url: string; imageSrc: string; blurb: string }

export const CONTACTS: Contact[] = [
  {
    tag: 'Mail',
    title: 'Email',
    handle: 'shreyasomi775@gmail.com',
    url: 'mailto:shreyasomi775@gmail.com',
    blurb: 'Direct email for collaborations, internships, and opportunities.',
    imageSrc: head(1),
  },
  {
    tag: 'Work',
    title: 'LinkedIn',
    handle: 'in/shreyasomi',
    url: 'https://linkedin.com/in/shreyasomi',
    blurb: 'Professional profile, achievements, recommendations, and updates.',
    imageSrc: head(2),
  },
  {
    tag: 'Code',
    title: 'GitHub',
    handle: 'shreyasomi',
    url: 'https://github.com/shreyasomi',
    blurb: 'Open-source repositories, AI/ML pipelines, and project codebases.',
    imageSrc: head(5),
  },
  {
    tag: 'Phone',
    title: 'Contact',
    handle: '+91-8340288756',
    url: 'tel:+918340288756',
    blurb: 'Phone & WhatsApp contact (Bhubaneswar, Odisha).',
    imageSrc: head(6),
  },
  {
    tag: 'DSA',
    title: 'LeetCode',
    handle: 'shreyasomi',
    url: 'https://leetcode.com',
    blurb: 'Data structures, algorithms, and problem-solving practice.',
    imageSrc: head(7),
  },
  {
    tag: 'Data',
    title: 'Kaggle',
    handle: 'shreyasomi',
    url: 'https://kaggle.com',
    blurb: 'Machine learning datasets, notebooks, and competitive modeling.',
    imageSrc: head(8),
  },
  {
    tag: 'Edu',
    title: 'Education',
    handle: 'Centurion University (CGPA 8.89)',
    url: 'https://cutm.ac.in/',
    blurb: 'B.Tech in Computer Science and Engineering (AI/ML) · 2024 – 2028.',
    imageSrc: head(3),
  },
  {
    tag: 'Lead',
    title: 'Ambassadorships',
    handle: 'Google Student Ambassador & GSSoC',
    url: 'https://github.com/shreyasomi',
    blurb: 'Google Student Ambassador (2025 & 2026) · GirlScript Summer of Code Ambassador (2026).',
    imageSrc: head(4),
  },
]
