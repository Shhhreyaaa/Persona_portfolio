export type Credit = {
  /** ribbon on the row's left edge */
  tag: string
  title: string
  /** who made it */
  author: string
  license: string
  url?: string
}

const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`
/* the party heads the list rows wear, cycled down the list */
export const CREDIT_HEADS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(head)

/** Certifications and engineering credits */
export const CREDITS: Credit[] = [
  {
    tag: 'Cert',
    title: 'Google AI Professional Certificate',
    author: 'Google',
    license: 'Verified Credential',
    url: 'https://coursera.org',
  },
  {
    tag: 'Cert',
    title: 'AWS Generative AI & Bedrock',
    author: 'Amazon Web Services',
    license: 'Professional Certificate',
    url: 'https://aws.amazon.com',
  },
  {
    tag: 'Cert',
    title: 'AI Agents & Agentic Workflows',
    author: 'IBM Specialization',
    license: 'Professional Credential',
    url: 'https://ibm.com',
  },
  {
    tag: 'Cert',
    title: 'Google AI Agents Intensive',
    author: 'Google AI Program',
    license: 'Specialist Course',
    url: 'https://google.com',
  },
  {
    tag: 'Model',
    title: 'Makoto Yuki 3D model',
    author: '雨宮レン · Sketchfab',
    license: 'CC BY 4.0',
    url: 'https://sketchfab.com/3d-models/makoto-yuki-persona-5-royal-dlc-batlle-bundle-3db577331f5442c79ec7cd0ac181adf2',
  },
  {
    tag: 'Art',
    title: 'Persona 3 Reload UI Design',
    author: 'ATLUS · UI styling, portraits',
    license: '© ATLUS / SEGA',
    url: 'https://www.atlus.com/',
  },
  {
    tag: 'Music',
    title: 'Persona 3 Reload OST',
    author: 'ATLUS Sound Team',
    license: '© ATLUS / SEGA',
    url: 'https://www.atlus.com/',
  },
  {
    tag: 'Engine',
    title: 'React 19 + Three.js + Web Audio',
    author: 'Shreya Somi · Adapted Portfolio',
    license: 'MIT License',
    url: 'https://github.com/shreyasomi',
  },
]
