import { Avatar } from 'antd'
import UserOutlined from '@ant-design/icons/es/icons/UserOutlined'

//esto es por si no tenemos foto de perfil, apareceran las Iniciales del nombre
const getInitials = (name) =>
    name
        .split(' ') // Separa el nombre en palabras
        .filter(Boolean) // Elimina espacios vacíos
        .slice(0, 2) // Se queda con las 2 primeras
        .map((word) => word[0].toUpperCase()) // Primera letra en mayúscula
        .join('')


const ProfileAvatar = ({ name, src, size = 180}) => (
    <Avatar
        size={size}
        src={src || undefined}
        alt={`foto de ${name}`}
        icon={!src && !name ? <UserOutlined /> : undefined}
    style = {{ fontSize: size / 3}}>
        {getInitials(name)}
        </Avatar>
)

export default ProfileAvatar