import { Typography } from 'antd'

const { Text, Title } = Typography

const ExperienceItem = ({ company, role, startDate, endDate }) => (
  <div style={{ padding: '16px 0', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
    <Title level={4} style={{ margin: 0, fontSize: 18 }}>
      {role}
    </Title>
    <Text strong style={{ color: '#f59e0b', marginTop: 4 }}>{company}</Text>
    <br />
    <Text type="secondary" style={{ marginTop: 6 }}>
      {startDate} – {endDate}
    </Text>
  </div>
)

export default ExperienceItem
