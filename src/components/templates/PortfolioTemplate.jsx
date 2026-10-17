import { Divider, Layout } from 'antd'
import NavBar from '../organisms/NavBar'

const { Content } = Layout

// Recibe las secciones y el footer como props: así la plantilla sirve para cualquier contenido.
const PortfolioTemplate = ({ sections, footer }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar />
    <Content style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '48px 16px' }}>
      {sections.map((section, index) => (
        <div key={index}>
          {index > 0 && <Divider style={{ margin: '48px 0' }} />}
          {section}
        </div>
      ))}
    </Content>
    {footer}
  </Layout>
)

export default PortfolioTemplate
