import { Timeline } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import EducationItem from '../molecules/EducationItem'

const EducationSection = ({ education }) => (
  <section id="estudios" aria-labelledby="estudios-title">
    <SectionTitle>Estudios</SectionTitle>
    <Timeline
      className="custom-timeline"
      items={education.map((item) => ({
        key: item.id,
        dot: <span style={{ width: 14, height: 14, background: '#f59e0b', border: '3px solid #0b1120', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(245, 158, 11, 0.25)' }} />,
        content: <EducationItem {...item} />,
      }))}
    />
  </section>
)

export default EducationSection
