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
        size="large"
    >
        {label}
    </Button>
)

export default SocialButton
