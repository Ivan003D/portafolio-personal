import { Typography } from 'antd'

const { Text, Title } = Typography

const ExperienceItem = ({ company, role, startDate, endDate }) => (
    <div>
        <Title level={4} style={{ margin: 0 }}>
            {role}
        </Title>
        <Text strong>{company}</Text>
        <br />
        <Text type="secondary">
            {startDate} – {endDate}
        </Text>
    </div>
)

export default ExperienceItem
