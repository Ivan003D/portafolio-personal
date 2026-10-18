import { Layout } from 'antd'
import NavBar from '../organisms/NavBar'

const { Content } = Layout

// Plantilla del portafolio: envuelve las secciones con una barra fija y
// un contenedor centrado. Recibe las secciones y el footer como props.
const PortfolioTemplate = ({ sections, footer }) => (
  <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
    <NavBar />
    <Content style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
      {sections.map((section, index) => (
        <div key={index} className="section-wrapper reveal">
          {index > 0 && <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 auto 48px', width: '60px', opacity: 0.5 }} />}
          {section}
        </div>
      ))}
    </Content>
    {footer}
  </Layout>
)

export default PortfolioTemplate
