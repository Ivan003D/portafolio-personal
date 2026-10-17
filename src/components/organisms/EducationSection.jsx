import { Timeline } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import EducationItem from '../molecules/EducationItem'

const EducationSection = ({ education }) => (
  <section id="estudios">
    <SectionTitle>Estudios</SectionTitle>
    <Timeline
      items={education.map((item) => ({
        key: item.id,
        content: <EducationItem {...item} />,
      }))}
    />
  </section>
)

export default EducationSection
