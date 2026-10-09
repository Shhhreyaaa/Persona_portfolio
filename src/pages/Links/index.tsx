import { DetailHeading, ListDetailPage, type ListEntry } from '../../components/ListDetailPage'
import { ContactEmailForm, LinkedInCard, GitHubLiveCard } from './ContactPanels'

const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`

const ENTRIES: ListEntry[] = [
  {
    key: 'email',
    imageSrc: head(1),
    title: 'Email',
    subtitle: '',
    aside: '',
    tag: undefined,
    url: 'mailto:shreyasomi775@gmail.com',
    detail: (
      <>
        <DetailHeading title="Email" sub="shreyasomi775@gmail.com" />
        <ContactEmailForm />
      </>
    ),
  },
  {
    key: 'linkedin',
    imageSrc: head(2),
    title: 'LinkedIn',
    subtitle: '',
    aside: '',
    tag: undefined,
    url: 'https://www.linkedin.com/in/shreyasomi77/',
    detail: (
      <>
        <DetailHeading title="LinkedIn" sub="https://www.linkedin.com/in/shreyasomi77/" />
        <LinkedInCard />
      </>
    ),
  },
  {
    key: 'github',
    imageSrc: head(3),
    title: 'GitHub',
    subtitle: '',
    aside: '',
    tag: undefined,
    url: 'https://github.com/Shhhreyaaa',
    detail: (
      <>
        <DetailHeading title="GitHub" sub="https://github.com/Shhhreyaaa" />
        <GitHubLiveCard />
      </>
    ),
  },
]

/** CONTACT: Email, LinkedIn, GitHub with rich interactive panels */
export const Links = () => <ListDetailPage title="CONTACT" ring="CONNECT" entries={ENTRIES} />
