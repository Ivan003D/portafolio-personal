import { Typography } from 'antd'

const { Text, Title } = Typography

const EducationItem = ({ institution, degree, year }) => (
  <div style={{ padding: '16px 0', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
    <Title level={4} style={{ margin: 0, fontSize: 18 }}>
      {degree}
    </Title>
    <Text strong style={{ color: '#f59e0b', marginTop: 4 }}>{institution}</Text>
    {year && (
      <>
        <br />
        <Text type="secondary" style={{ marginTop: 6 }}>
          {year}
        </Text>
      </>
    )}
  </div>
)

export default EducationItem
