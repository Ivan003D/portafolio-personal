import { Col, Row, Space, Tag, Typography } from 'antd'
import ProfileAvatar from '../atoms/ProfileAvatar.jsx'
import SocialLinks from '../molecules/SocialLinks'

const { Paragraph, Title, Text } = Typography

const PersonalSection = ({ profile, socialLinks }) => (
  <section id="personal" aria-labelledby="personal-title">
    <div className="reveal" style={{ animationDelay: '0.1s' }}>
      <Row gutter={[32, 48]} align="middle" className="personal-row">
        <Col xs={24} md={13} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Playfair Display, Georgia, serif' }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#e63946',
                display: 'inline-block',
                boxShadow: '0 0 12px rgba(230, 57, 70, 0.6)',
              }}
            />
            <span style={{ fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600 }}>
              Desarrollador Full Stack
            </span>
          </div>

          <Title id="personal-title" level={1} style={{ marginTop: 0, fontSize: 56, lineHeight: 1.1 }}>
            {profile.name}
          </Title>

          <Text type="secondary" style={{ fontSize: 20, fontWeight: 500, color: '#f59e0b' }}>
            {profile.title}
          </Text>

          <Paragraph style={{ marginTop: 16, fontSize: 17, color: '#cbd5e1', maxWidth: 520, lineHeight: 1.7 }}>
            {profile.description}
          </Paragraph>

          <Space wrap size="middle" style={{ marginTop: 24 }}>
            {profile.skills.map((skill) => (
              <Tag
                key={skill}
                style={{
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#fbbf24',
                }}
              >
                {skill}
              </Tag>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={11} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, justifyContent: 'center' }}>
          <ProfileAvatar name={profile.name} src={profile.photo} size={200} />
          <SocialLinks links={socialLinks} />
        </Col>
      </Row>
    </div>
  </section>
)

export default PersonalSection
