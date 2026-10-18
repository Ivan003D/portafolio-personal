import { Space } from 'antd'
import SocialButton from '../atoms/SocialButton'

const SocialLinks = ({ links }) => (
  <Space wrap size="middle">
    {links.map(({ id, label, url }) => (
      <SocialButton key={id} id={id} label={label} url={url} />
    ))}
  </Space>
)

export default SocialLinks
