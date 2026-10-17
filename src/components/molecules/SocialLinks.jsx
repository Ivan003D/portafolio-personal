import { Space } from 'antd'
import SocialButton from '../atoms/SocialButton'

const SocialLinks = ({ links }) => (
  <Space wrap>
    {/* map() crea un botón por cada red; `key` ayuda a React a identificar cada elemento de la lista */}
    {links.map(({ id, label, url }) => (
      <SocialButton key={id} id={id} label={label} url={url} />
    ))}
  </Space>
)

export default SocialLinks
