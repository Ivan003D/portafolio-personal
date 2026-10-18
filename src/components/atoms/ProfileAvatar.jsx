import { Avatar } from 'antd'
import UserOutlined from '@ant-design/icons/es/icons/UserOutlined'

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')

const ProfileAvatar = ({ name, src, size = 180 }) => (
  <Avatar
    size={size}
    src={src || undefined}
    alt={`foto de ${name}`}
    icon={!src && !name ? <UserOutlined /> : undefined}
    style={{
      fontSize: size / 3,
      border: '3px solid #e5d8bd',
    }}
  >
    {getInitials(name)}
  </Avatar>
)

export default ProfileAvatar
