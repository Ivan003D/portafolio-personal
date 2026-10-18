import { Col, Empty, Row, Skeleton } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import ProjectFilter from '../molecules/ProjectFilter'
import useProjects from '../../hooks/useProjects'
import ProjectCard from '../molecules/ProjectCard'

const ProjectsSection = ({ projects: allProjects }) => {
  const { projects, tags, activeTag, setActiveTag, loading } = useProjects(allProjects)

  return (
    <section id="proyectos" aria-labelledby="proyectos-title">
      <SectionTitle>Desarrollos y Proyectos</SectionTitle>
      {loading ? (
        <div data-testid="projects-loading" style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Skeleton active />
        </div>
      ) : (
        <>
          {projects.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <ProjectFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
            </div>
          )}
          {projects.length === 0 ? (
            <Empty description="No hay proyectos para mostrar" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <Row gutter={[24, 24]}>
              {projects.map((project) => (
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
