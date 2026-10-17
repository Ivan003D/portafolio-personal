import PortfolioTemplate from '../templates/PortfolioTemplate'
import PersonalSection from '../organisms/PersonalSection'
import ExperienceSection from '../organisms/ExperienceSection'
import EducationSection from '../organisms/EducationSection'
import ProjectsSection from '../organisms/ProjectsSection'
import ContactSection from '../organisms/ContactSection'
import Footer from '../organisms/Footer'
import {
  contactInfo,
  education,
  experiences,
  profile,
  projects,
  socialLinks,
} from '../../data/portfolio'

// El orden de las secciones sigue el boceto: personal, experiencia, estudios, proyectos y contacto.
const HomePage = () => (
  <PortfolioTemplate
    sections={[
      <PersonalSection key="personal" profile={profile} socialLinks={socialLinks} />,
      <ExperienceSection key="experiencia" experiences={experiences} />,
      <EducationSection key="estudios" education={education} />,
      <ProjectsSection key="proyectos" projects={projects} />,
      <ContactSection key="contacto" socialLinks={socialLinks} />,
    ]}
    footer={<Footer name={profile.name} {...contactInfo} />}
  />
)

export default HomePage
