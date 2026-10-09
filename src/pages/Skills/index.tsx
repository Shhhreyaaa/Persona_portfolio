import { DetailChips, DetailHeading, DetailSection, ListDetailPage, type ListEntry } from '../../components/ListDetailPage'
import { SKILL_CATEGORIES } from '../../data/skills'

const ENTRIES: ListEntry[] = SKILL_CATEGORIES.map((cat) => ({
  key: cat.title,
  imageSrc: cat.imageSrc,
  title: cat.title,
  subtitle: cat.summary,
  aside: cat.proficiency,
  tag: cat.tag,
  detail: (
    <>
      <DetailHeading title={cat.title} sub={cat.proficiency} />
      <DetailSection label="Toolbox & Technologies">
        <DetailChips items={cat.items} />
      </DetailSection>
      <DetailSection label="Focus & Capabilities">
        <p className="detail-note" style={{ fontSize: '1.02rem', lineHeight: '1.45', color: '#cfeaff', fontStyle: 'normal' }}>
          {cat.description}
        </p>
      </DetailSection>
    </>
  ),
}))

export const Skills = () => <ListDetailPage title="SKILLS" ring="TOOLBOX" dark entries={ENTRIES} />
