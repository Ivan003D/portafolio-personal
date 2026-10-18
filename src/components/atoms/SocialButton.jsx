import { Button } from 'antd'
import GithubOutlined from '@ant-design/icons/es/icons/GithubOutlined'
import LinkedinOutlined from '@ant-design/icons/es/icons/LinkedinOutlined'
import LinkOutlined from '@ant-design/icons/es/icons/LinkOutlined'

const ICONS = {
  linkedin: <LinkedinOutlined />,
  github: <GithubOutlined />,
}

const SocialButton = ({ id, label, url }) => (
  <Button
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    icon={ICONS[id] ?? <LinkOutlined />}
    size="middle"
    style={{
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid var(--border)',
      color: '#f8fafc',
      fontWeight: 500,
      padding: '10px 16px',
      borderRadius: 10,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: 'all 0.3s ease',
    }}
  >
    {label}
  </Button>
)

export default SocialButton
