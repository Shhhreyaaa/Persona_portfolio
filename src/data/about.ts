const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`

export type AboutSection = {
  tag: string
  title: string
  subtitle: string
  detailTitle: string
  detailSub?: string
  aboutNote?: string
  highlights?: string[]
  chips?: string[]
  imageSrc: string
}

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    tag: 'Bio',
    title: 'Shreya Somi',
    subtitle: 'Game Developer',
    detailTitle: 'Shreya Somi',
    detailSub: 'Game Developer, AI Power User, Tech Wizard',
    aboutNote:
      'I build games and interactive software with Unity X Unreal, C#, Java, Python, Full-stack and AI.\nI care about the systems nobody imagines — Game Design, Game Mechanics, UX, Story Elements, clean architecture — because that is where a game lives or dies.',
    chips: ['Game Design', 'gameAI', 'Creation', 'Software dev', 'XR'],
    imageSrc: head(1),
  },
  {
    tag: 'Role',
    title: 'Role',
    subtitle: 'Game Developer',
    detailTitle: 'Role',
    detailSub: 'Game Developer',
    highlights: ['Game Design · Systems · AI'],
    chips: ['Game Design', 'Systems', 'AI'],
    imageSrc: head(2),
  },
  {
    tag: 'Stack',
    title: 'Core Stack',
    subtitle: 'Unity · Unreal · Blender · C# · Python · Creation',
    detailTitle: 'Core Stack',
    detailSub: 'Unity · Unreal · Blender · C# · Python · Creation',
    chips: ['Unity', 'Unreal', 'Blender', 'C#', 'Python', 'Creation'],
    highlights: ['Specialized in real-time interactive engines, 3D modelling, and high-performance gameplay systems.'],
    imageSrc: head(3),
  },
  {
    tag: 'Focus',
    title: 'Focus',
    subtitle: 'Games • 3D Projects • Innovation',
    detailTitle: 'Focus',
    detailSub: 'Games • 3D Projects • Innovation',
    highlights: ['Design • Modification • Unique'],
    chips: ['Games', '3D Projects', 'Innovation', 'Design', 'Modification', 'Unique'],
    imageSrc: head(4),
  },
  {
    tag: 'Hobbies',
    title: 'Hobbies',
    subtitle: 'Gaming • Building • Exploring',
    detailTitle: 'Hobbies',
    detailSub: 'Gaming • Building • Exploring',
    highlights: ['Entertainment Consuming • Tech News'],
    chips: ['Gaming', 'Building', 'Exploring', 'Entertainment Consuming', 'Tech News'],
    imageSrc: head(5),
  },
]
