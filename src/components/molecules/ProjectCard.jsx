import { Button, Card, Space } from 'antd'
import GithubOutlined from '@ant-design/icons/es/icons/GithubOutlined'
import TechTag from '../atoms/TechTag'

const ProjectCard = ({ title, description, image, repoUrl, tags = [] }) => (
  <Card
    hoverable
    cover={<img src={image} alt={`Previsualización de ${title}`} />}
    actions={[
      <Button
        key="repo"
        type="link"
        href={repoUrl}
        target="_blank" //este hace que abre en una pestaña nueva
        rel="noopener noreferrer" //esta es una medida de seguridad para enlaces externos
        icon={<GithubOutlined />}
      >
        Ver repositorio
      </Button>,
    ]}
  >
    <Card.Meta title={title} description={description} />
    <Space wrap style={{ marginTop: 12 }}>
      {tags.map((tag) => (
        <TechTag key={tag}>{tag}</TechTag> //recorre la lista de tecnologías y crea un TechTag por cada una. El key={tag} es obligatorio en React para identificar cada elemento de una lista
      ))}
    </Space>
  </Card>
)

export default ProjectCard
