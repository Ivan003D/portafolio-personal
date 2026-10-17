import { Layout, Menu } from 'antd'
import useActiveSection from '../../hooks/useActiveSection'

const { Header } = Layout

// Enlaces ancla (#id): al hacer clic, la página baja a la sección con ese id (sin recargar)

export const NAV_ITEMS = [
  { key: 'personal', label: <a href="#personal">Personal</a> },
  { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
  { key: 'estudios', label: <a href="#estudios">Estudios</a> },
  { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
  { key: 'contacto', label: <a href="#contacto">Contacto</a> },
]

// Se calcula una sola vez, fuera del componente, para no recrear la lista en cada render
const SECTION_IDS = NAV_ITEMS.map(({ key }) => key)

// barra de navegación fija arriba. Usa un hook propio para marcar la sección visible.
const NavBar = () => {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 10, padding: '0 16px' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[activeId]}
        items={NAV_ITEMS}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  )
}

export default NavBar
