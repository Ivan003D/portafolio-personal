import { Segmented } from 'antd'

const ProjectFilter = ({ tags, activeTag, onChange }) => (
  <Segmented
    options={tags}
    value={activeTag}
    onChange={onChange}
    aria-label="Filtrar proyectos por tecnología"
  />
)

export default ProjectFilter
