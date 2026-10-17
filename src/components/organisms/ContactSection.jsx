import { Col, Row, Typography } from 'antd'
import SectionTitle from '../atoms/SectionTitle'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from './ContactForm'

const { Paragraph } = Typography

// onSubmit es opcional: permite conectar el formulario a un servicio real más adelante.

const ContactSection = ({ socialLinks, onSubmit }) => (
  <section id="contacto">
    <SectionTitle>Contacto</SectionTitle>
    <Row gutter={[32, 32]}>
      <Col xs={24} md={8}>
        <Paragraph>¿Quieres trabajar conmigo? Encuéntrame en mis redes o escríbeme.</Paragraph>
        <SocialLinks links={socialLinks} />
      </Col>
      <Col xs={24} md={16}>
        <ContactForm onSubmit={onSubmit} />
      </Col>
    </Row>
  </section>
)

export default ContactSection
