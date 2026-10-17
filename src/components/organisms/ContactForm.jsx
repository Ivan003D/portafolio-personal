import { Alert, Button, Form } from 'antd'
import SendOutlined from '@ant-design/icons/es/icons/SendOutlined'
import FormField from '../molecules/FormField'
import useContactForm from '../../hooks/useContactForm'

// aquí solo se conecta cada campo con su valor, su error y sus eventos.
const ContactForm = ({ onSubmit }) => {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } =
    useContactForm(onSubmit)

  return (
      // noValidate desactiva la validación del navegador para usar la nuestra (mensajes en español y consistentes)
    <Form layout="vertical" component="form" onSubmitCapture={handleSubmit} noValidate>
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
        {/* Renderizado condicional: el aviso de éxito solo aparece después de enviar bien el formulario */}
      {status === 'success' && (
        <Alert
          type="success"
          showIcon
          title="¡Mensaje enviado correctamente!"
          style={{ marginBottom: 16 }}
        />
      )}
      <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
        Enviar mensaje
      </Button>
    </Form>
  )
}

export default ContactForm
