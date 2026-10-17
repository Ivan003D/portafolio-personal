import { Layout, Typography } from 'antd'

const { Footer: AntFooter } = Layout
const { Text } = Typography

const Footer = ({ name, email, location }) => {
  const currentYear = new Date().getFullYear()

  return (
    <AntFooter style={{ textAlign: 'center' }}>
      <Text>
        © {currentYear} {name}. Todos los derechos reservados.
      </Text>
      <br />
      <Text type="secondary">
        {email} · {location}
      </Text>
    </AntFooter>
  )
}

export default Footer
