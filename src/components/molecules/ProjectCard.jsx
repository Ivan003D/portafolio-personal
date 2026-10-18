import { Button, Card, Space } from 'antd'
import GithubOutlined from '@ant-design/icons/es/icons/GithubOutlined'
import TechTag from '../atoms/TechTag'

const ProjectCard = ({ title, description, image, repoUrl, tags = [] }) => (
  <Card
    className="project-card"
    hoverable
    cover={
      <div className="project-cover">
        <img src={image} alt={`Previsualización de ${title}`} />
        <div className="project-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="project-tag">Ver proyecto</span>
        </div>
      </div>
    }
    actions={[
      <Button
        key="repo"
        type="link"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        icon={<GithubOutlined />}
        style={{ color: '#f8fafc' }}
      >
        Ver repositorio
      </Button>,
    ]}
  >
    <Card.Meta title={title} description={description} />
    <Space wrap style={{ marginTop: 12 }}>
      {tags.map((tag) => (
        <TechTag key={tag}>{tag}</TechTag>
      ))}
    </Space>
  </Card>
)

export default ProjectCard
