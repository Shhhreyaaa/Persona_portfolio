import { DetailChips, DetailHeading, DetailSection, ListDetailPage, type ListEntry } from '../../components/ListDetailPage'
import { ABOUT_SECTIONS } from '../../data/about'

const ENTRIES: ListEntry[] = ABOUT_SECTIONS.map((sec) => ({
  key: sec.title,
  imageSrc: sec.imageSrc,
  title: sec.title,
  subtitle: sec.subtitle,
  aside: sec.tag,
  tag: sec.tag,
  detail: (
    <>
      <DetailHeading title={sec.detailTitle} sub={sec.detailSub} />
      {sec.aboutNote && (
        <DetailSection label="About">
          <p
            className="detail-note"
            style={{
              fontSize: '1.02rem',
              lineHeight: '1.55',
              color: '#edf2ff',
              fontStyle: 'normal',
              whiteSpace: 'pre-line',
            }}
          >
            {sec.aboutNote}
          </p>
        </DetailSection>
      )}
      {sec.chips && (
        <DetailSection label={sec.tag === 'Bio' ? 'Interests' : sec.tag === 'Stack' ? 'Tech Stack' : 'Overview'}>
          <DetailChips items={sec.chips} />
        </DetailSection>
      )}
      {sec.highlights && sec.tag !== 'Bio' && (
        <DetailSection label="Highlights">
          <ul className="detail-lines">
            {sec.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </DetailSection>
      )}
    </>
  ),
}))

export const About = () => <ListDetailPage title="ABOUT" ring="PROFILE" dark entries={ENTRIES} />
