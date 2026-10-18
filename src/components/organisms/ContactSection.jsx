import { Col, Row, Typography } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from './ContactForm'

const { Paragraph } = Typography

const ContactSection = ({ socialLinks, onSubmit }) => (
  <section id="contacto" aria-labelledby="contacto-title">
    <SectionTitle>Contacto</SectionTitle>
    <Row gutter={[32, 48]}>
      <Col xs={24} md={6} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: 'var(--bg-card)', padding: 28, borderRadius: 16, border: '1px solid var(--border)' }}>
          <Paragraph style={{ fontSize: 16, color: '#cbd5e1', marginBottom: 16 }}>
            ¿Quieres trabajar conmigo? Escríbeme o encuentrame en mis redes.
          </Paragraph>
          <SocialLinks links={socialLinks} />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <ContactForm onSubmit={onSubmit} />
      </Col>
    </Row>
  </section>
)

export default ContactSection
