import { Timeline } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import ExperienceItem from '../molecules/ExperienceItem'

const ExperienceSection = ({ experiences }) => (
  <section id="experiencia" >
    <SectionTitle>Experiencia Laboral</SectionTitle>
    <Timeline
      items={experiences.map((experience) => ({
        key: experience.id,
        content: <ExperienceItem {...experience} />,
      }))}
    />
  </section>
)

export default ExperienceSection
