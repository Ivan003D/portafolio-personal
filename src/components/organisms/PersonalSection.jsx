import { Col, Row, Space, Tag, Typography } from 'antd'
import ProfileAvatar from '../atoms/ProfileAvatar.jsx'
import SocialLinks from '../molecules/SocialLinks'

const { Paragraph, Title, Text } = Typography

// Recibe los datos por props (no los importa): así es reutilizable y fácil de probar.
const PersonalSection = ({ profile, socialLinks }) => (
  <section id="personal" aria-labelledby="personal-title">
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={14}>
        <Title id="personal-title" level={1} style={{ marginTop: 0 }}>
          {profile.name}
        </Title>
        <Text type="secondary" style={{ fontSize: 18 }}>
          {profile.title}
        </Text>
        <Paragraph style={{ marginTop: 16, fontSize: 16 }}>{profile.description}</Paragraph>
        <Space wrap>
          {profile.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </Space>
      </Col>
      <Col xs={24} md={10}>
        <Space orientation="vertical" align="center" size="large" style={{ width: '100%' }}>
          <ProfileAvatar name={profile.name} src={profile.photo} />
          <SocialLinks links={socialLinks} />
        </Space>
      </Col>
    </Row>
  </section>
)

export default PersonalSection
