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
    period: 'Current',
    current: true,
    description: [
      'Building software, XR experiences, AI-powered applications, and immersive 3D solutions — "Goes Beyond Reality".',
      'Engineering interactive spatial applications using C#, Unity, WebXR, and Spatial Computing frameworks.',
      'Specializing in real-time 3D mechanics, AI assistant integrations, and next-generation immersive tech.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0400.png`,
    about: {
      name: 'OnyVerse',
      text: 'Software · AR/VR/XR · AI · 3D\nBuilding software, XR experiences, AI-powered applications, and immersive 3D solutions — "Goes Beyond Reality". Core Stack: C#, Unity, WebXR, Spatial Computing.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_2_colored.png`,
    title: 'AI / ML Intern',
    company: 'Unified Mentor',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/unified-mentor.webp`,
    period: 'Jan 2026 – Apr 2026',
    description: [
      'Designed and evaluated machine learning models using Python and Scikit-learn on structured business datasets.',
      'Engineered preprocessing and feature engineering pipelines to improve model performance and prediction accuracy.',
      'Performed exploratory data analysis, visualization, and statistical interpretation using Pandas and Matplotlib.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0600.png`,
    about: {
      name: 'Unified Mentor',
      text: 'Unified Mentor provides structured industry project mentorship and intensive training in Machine Learning, predictive modeling, and applied AI systems.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_3_colored.png`,
    title: 'Data Science Intern',
    company: 'Cognifyz Technologies',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/cognifyz.webp`,
    period: 'Sep 2025 – Oct 2025',
    description: [
      'Analyzed structured datasets using Python and Pandas to extract actionable insights through exploratory data analysis.',
      'Applied data preprocessing, statistical analysis, and visualization techniques to identify trends and patterns.',
      'Generated analytical reports and visual dashboards supporting data-driven decision making.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0700.png`,
    about: {
      name: 'Cognifyz Technologies',
      text: 'Cognifyz Technologies is a technology and analytics solutions firm focused on AI-powered business intelligence and data science workflows.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_4_colored.png`,
    title: 'AI / ML Intern',
    company: 'InternPe',
    logoSrc: `${import.meta.env.BASE_URL}assets/company_logo/internpe.webp`,
    period: 'Jun 2025 – Jul 2025',
    description: [
      'Implemented supervised machine learning models including regression and classification algorithms using Scikit-learn.',
      'Applied preprocessing techniques such as feature scaling, missing value handling, and evaluation metric analysis.',
      'Strengthened understanding of end-to-end machine learning workflows including data preparation, model training, and performance evaluation.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_1400.png`,
    about: {
      name: 'InternPe',
      text: 'InternPe is an experiential learning platform delivering hands-on engineering internships in software engineering, AI algorithms, and machine learning pipelines.',
    },
  },
]
