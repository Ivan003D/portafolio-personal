import { Timeline } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import ExperienceItem from '../molecules/ExperienceItem'

const ExperienceSection = ({ experiences }) => (
  <section id="experiencia" aria-labelledby="experiencia-title">
    <SectionTitle>Experiencia Laboral</SectionTitle>
    <Timeline
      className="custom-timeline"
      items={experiences.map((experience) => ({
        key: experience.id,
        dot: <span style={{ width: 14, height: 14, background: '#e63946', border: '3px solid #0b1120', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(230, 57, 70, 0.25)' }} />,
        content: <ExperienceItem {...experience} />,
      }))}
    />
  </section>
)

export default ExperienceSection
