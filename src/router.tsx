import { createBrowserRouter, Navigate } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { MainMenu } from './pages/MainMenu'
import { Builds } from './pages/Builds'
import { Links } from './pages/Links'
import { Skill } from './pages/Skill'
import { About } from './pages/About'
import { Skills } from './pages/Skills'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: MainMenu },
        { path: 'about', Component: About },
        { path: 'projects', Component: Builds },
        { path: 'builds', Component: Builds },
        { path: 'skills', Component: Skills },
        {
          path: 'experience',
          lazy: () => import('./pages/SkillLayout').then((m) => ({ Component: m.SkillLayout })),
          children: [
            { index: true, Component: Skill },
            {
              path: ':index',
              lazy: () => import('./pages/SkillDetail').then((m) => ({ Component: m.SkillDetail })),
            },
          ],
        },
        {
          path: 'careers',
          lazy: () => import('./pages/SkillLayout').then((m) => ({ Component: m.SkillLayout })),
          children: [
            { index: true, Component: Skill },
            {
              path: ':index',
              lazy: () => import('./pages/SkillDetail').then((m) => ({ Component: m.SkillDetail })),
            },
          ],
        },
        { path: 'contact', Component: Links },
        { path: 'links', Component: Links },
        { path: 'credits', lazy: () => import('./pages/Credits').then((m) => ({ Component: m.Credits })) },
        { path: 'figure-lab', lazy: () => import('./pages/FigureLab').then((m) => ({ Component: m.FigureLab })) },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
