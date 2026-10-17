import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import HomePage from './components/pages/HomePage'

// Tema global: cambiar el color o el borde aquí cambia
const theme = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 8,
  },
}

// Arrow function con retorno implícito: el componente solo envuelve la página con la configuración global
const App = () => (
    <ConfigProvider locale={esES} theme={theme}>
      <HomePage />
    </ConfigProvider>
)

export default App
