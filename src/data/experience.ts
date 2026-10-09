export type Experience = {
  headSrc: string
  title: string
  company: string
  period: string
  current?: boolean
  description: string[]
  /** P3R social-link bust-up shown bottom-right on the detail page: a
      2048² canvas with the character in its lower right, see SkillDetail.css */
  bustupSrc: string
  /** the name + description box over the bust-up: the company, in a line */
  about: { name: string; text: string }
  /** transparent company logo drawn on the 3D card's face, see ThreeCard */
  logoSrc?: string
}

export const EXPERIENCE: Experience[] = [
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_1_colored.png`,
    title: 'Developer',
    company: 'OnyVerse',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/onyverse.png`,
    period: 'Current · Present',
    current: true,
    description: [
      'Building immersive software, XR experiences, AI-powered applications, and spatial 3D systems — "Goes Beyond Reality".',
      'Engineering interactive spatial applications utilizing C#, Unity, WebXR, and Spatial Computing frameworks.',
      'Specializing in real-time 3D mechanics, AI assistant integrations, and next-generation interactive technology.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0400.png`,
    about: {
      name: 'OnyVerse',
      text: 'Software · AR/VR/XR · AI · 3D\n\nBuilding immersive software, XR experiences, and AI-powered 3D solutions — "Goes Beyond Reality".\n\nCore Stack: C# · Unity · WebXR · Spatial Computing',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_2_colored.png`,
    title: 'AI / ML Intern',
    company: 'Unified Mentor',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/unified-mentor.webp`,
    period: 'Jan 2026 – Apr 2026',
    description: [
      'Designed and evaluated machine learning models using Python and Scikit-learn on structured industry datasets.',
      'Engineered preprocessing and feature engineering pipelines to improve predictive accuracy and model performance.',
      'Conducted exploratory data analysis, visualization, and statistical modeling using Pandas and Matplotlib.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0600.png`,
    about: {
      name: 'Unified Mentor',
      text: 'AI & Data Science Mentorship\n\nUnified Mentor provides structured industry project mentorship and intensive training in Machine Learning, predictive modeling, and applied AI systems.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_3_colored.png`,
    title: 'Data Science Intern',
    company: 'Cognifyz Technologies',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/cognifyz.webp`,
    period: 'Sep 2025 – Oct 2025',
    description: [
      'Analyzed structured business datasets using Python and Pandas to extract actionable strategic insights.',
      'Applied data preprocessing, feature normalization, and statistical analysis to uncover behavioral trends.',
      'Generated analytical reports, statistical summaries, and visual dashboards supporting data-driven decisions.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0700.png`,
    about: {
      name: 'Cognifyz Technologies',
      text: 'Data Analytics & AI Solutions\n\nCognifyz Technologies is a technology and analytics solutions firm focused on AI-powered business intelligence and data science workflows.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_4_colored.png`,
    title: 'AI / ML Intern',
    company: 'InternPe',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/internpe.webp`,
    period: 'Jun 2025 – Jul 2025',
    description: [
      'Implemented supervised machine learning algorithms including regression and classification models with Scikit-learn.',
      'Engineered end-to-end preprocessing workflows including feature scaling, missing value handling, and evaluation metrics.',
      'Strengthened practical understanding of production ML pipelines from dataset preparation to model evaluation.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_1400.png`,
    about: {
      name: 'InternPe',
      text: 'Software & AI Engineering\n\nInternPe is an experiential learning platform delivering hands-on engineering internships in software engineering, AI algorithms, and machine learning pipelines.',
    },
  },
]
