import { Typography } from 'antd'

const { Title } = Typography

const SectionTitle = ({ children }) => (
  <Title
    level={2}
    style={{
      marginTop: 0,
      marginBottom: 16,
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      position: 'relative',
      display: 'inline-block',
    }}
  >
    <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    <span
      style={{
        position: 'absolute',
        left: 0,
        bottom: 6,
        width: '100%',
        height: 6,
        background: 'linear-gradient(90deg, #e63946 0%, #f59e0b 100%)',
        opacity: 0.35,
        borderRadius: 3,
        zIndex: 0,
      }}
    />
  </Title>
)

export default SectionTitle
