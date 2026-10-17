import { Typography } from 'antd'

const { Title } = Typography

const SectionTitle = ({ children }) => (
    <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>
        {children}
    </Title>
)

export default SectionTitle
