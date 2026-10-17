import { Col, Empty, Row, Skeleton } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import ProjectFilter from '../molecules/ProjectFilter'
import useProjects from '../../hooks/useProjects'
import ProjectCard from '../molecules/ProjectCard'

// este componente solo decide qué mostrar según el estado.
const ProjectsSection = ({ projects: allProjects }) => {
    // Destructuring con renombre: la prop "projects" pasa a llamarse allProjects para no chocar con el del hook
    const { projects, tags, activeTag, setActiveTag, loading } = useProjects(allProjects)

  return (
    <section id="proyectos">
      <SectionTitle>Desarrollos y Proyectos</SectionTitle>
      {loading ? (
        <div data-testid="projects-loading">
          <Skeleton active />
        </div>
      ) : (
        <>
          <div style={{ marginBottom: 24 }}>
            <ProjectFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
          </div>
          {projects.length === 0 ? (
            <Empty description="No hay proyectos para mostrar" />
          ) : (
            <Row gutter={[24, 24]}>
              {projects.map((project) => (
                  // xs/sm/lg: 1 tarjeta por fila en celular, 2 en tablet y 3 en pantalla grande (diseño adaptable)
                  <Col key={project.id} xs={24} sm={12} lg={8}>
                  <ProjectCard {...project} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </section>
  )
}

export default ProjectsSection
