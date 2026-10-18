import { Layout, Typography } from 'antd'

const { Footer: AntFooter } = Layout
const { Text } = Typography

const Footer = ({ name, email, location }) => {
  const currentYear = new Date().getFullYear()

  return (
    <AntFooter
      style={{
        textAlign: 'center',
        padding: 32,
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        marginTop: 48,
      }}
    >
      <Text style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
© {currentYear} {name}
        <span style={{ color: '#e63946', marginLeft: 6 }}>·</span>
        <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.9em' }}>Desarrollador Full Stack</span>
      </Text>
      <br />
      <Text type="secondary" style={{ fontSize: 14 }}>
        {email} · {location}
      </Text>
    </AntFooter>
  )
}

export default Footer
