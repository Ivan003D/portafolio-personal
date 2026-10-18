import { Layout, Menu } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import useActiveSection from '../../hooks/useActiveSection'

const { Header } = Layout

export const NAV_ITEMS = [
  { key: 'personal', label: <a href="#personal">Sobre mí</a> },
  { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
  { key: 'estudios', label: <a href="#estudios">Estudios</a> },
  { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
  { key: 'contacto', label: <a href="#contacto">Contacto</a> },
]

const SECTION_IDS = NAV_ITEMS.map(({ key }) => key)

const NavBar = () => {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 24px',
        background: 'rgba(11, 17, 32, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#f8fafc', fontFamily: '"Playfair Display", Georgia, serif', fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em' }}>
          <GithubOutlined style={{ color: '#e63946', fontSize: 22 }} />
          <span style={{ marginTop: 2 }}>IV<span style={{ color: '#e63946' }}>ÁN</span> GOMEZ</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeId]}
          items={NAV_ITEMS}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </Header>
  )
}

export default NavBar
