import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import 'antd/dist/reset.css'
import HomePage from './components/pages/HomePage'
import { useScrollReveal } from './hooks/useScrollReveal'

// Tema personalizado: colores de marca aplicados a los componentes de antd.
const theme = {
  token: {
    colorPrimary: '#e63946',      // rojo coral One Piece
    colorInfo: '#e63946',
    colorSuccess: '#f59e0b',      // dorado
    colorWarning: '#f59e0b',
    colorError: '#e63946',
    colorBgBase: '#0b1120',       // fondo oscuro
    colorBgContainer: '#12192b',  // tarjetas
    colorBgLayout: '#0b1120',
    colorTextBase: '#f8fafc',
    colorTextSecondary: '#94a3b8',
    colorTextTertiary: '#64748b',
    borderRadius: 12,
    borderRadiusLG: 16,
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: 16,
    lineHeight: 1.6,
    lineWidth: 2,
    marginLG: 48,
    paddingLG: 24,
  },
  components: {
    Layout: {
      bg: '#0b1120',
    },
    Menu: {
      itemBg: 'transparent',
      itemHoverBg: 'rgba(230, 57, 70, 0.1)',
      itemSelectedBg: 'rgba(230, 57, 70, 0.15)',
      colorText: '#94a3b8',
      colorTextHover: '#f8fafc',
      colorTextSelected: '#e63946',
      colorBorder: 'transparent',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      height: 64,
    },
    Card: {
      colorBorder: 'rgba(255, 255, 255, 0.08)',
      colorBgContainer: '#12192b',
      borderRadius: 16,
      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      headerBg: 'transparent',
    },
    Button: {
      borderRadius: 10,
      fontWeight: 600,
      primaryColor: '#e63946',
      primaryHoverColor: '#ff5462',
      primaryBorderColor: '#e63946',
      defaultBorderColor: 'rgba(255, 255, 255, 0.15)',
      defaultColor: '#f8fafc',
      defaultHoverBg: '#182138',
    },
    Input: {
      colorBgContainer: '#12192b',
      colorBorder: 'rgba(255, 255, 255, 0.15)',
      colorText: '#f8fafc',
      colorTextPlaceholder: '#64748b',
      borderRadius: 10,
    },
    Tag: {
      colorBgContainer: 'rgba(245, 158, 11, 0.1)',
      colorBorder: 'rgba(245, 158, 11, 0.3)',
      colorText: '#fbbf24',
      borderRadius: 8,
    },
    Avatar: {
      colorBg: '#12192b',
      colorBorder: 'rgba(245, 158, 11, 0.35)',
    },
    Timeline: {
      colorText: '#94a3b8',
      colorTextH2: '#f8fafc',
      itemDotBorderColor: '#e63946',
    },
  },
}

// Tema global: cambiar el color o el borde aquí cambia toda la aplicación.
const App = () => {
  useScrollReveal()
  return (
    <ConfigProvider locale={esES} theme={theme}>
      <HomePage />
    </ConfigProvider>
  )
}

export default App
