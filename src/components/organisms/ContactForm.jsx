import { Alert, Button, Form } from 'antd'
import SendOutlined from '@ant-design/icons/es/icons/SendOutlined'
import FormField from '../molecules/FormField'
import useContactForm from '../../hooks/useContactForm'

const ContactForm = ({ onSubmit }) => {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } =
    useContactForm(onSubmit)

  return (
    <div style={{ background: 'var(--bg-card)', padding: 32, borderRadius: 16, border: '1px solid var(--border)' }}>
      <Form
        layout="vertical"
        component="form"
        onSubmitCapture={handleSubmit}
        noValidate
        style={{ maxWidth: 520 }}
      >
        <FormField
          id="name"
          label="Nombre"
          value={values.name}
          error={errors.name}
          onChange={handleChange('name')}
          onBlur={handleBlur('name')}
        />
        <FormField
          id="email"
          label="Correo electrónico"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <FormField
          id="message"
          label="Mensaje"
          type="textarea"
          rows={5}
          value={values.message}
          error={errors.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
        />
        {status === 'success' && (
          <Alert
            type="success"
            showIcon
            title="¡Mensaje enviado correctamente!"
            style={{ marginBottom: 16 }}
          />
        )}
        <Button type="primary" htmlType="submit" icon={<SendOutlined />} style={{ width: '100%' }}>
          Enviar mensaje
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
