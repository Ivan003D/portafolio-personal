import { Form, Input } from 'antd'

// Sirve para texto, correo y área de texto, así no repetimos código tres veces.
const FormField = ({ id, label, type = 'text', value, error, onChange, onBlur, rows }) => {
  const InputComponent = type === 'textarea' ? Input.TextArea : Input
  return (
    <Form.Item
      label={label}
      htmlFor={id}
      validateStatus={error ? 'error' : ''}
      help={error || undefined}
      style={{
        marginBottom: 20,
        '& .ant-form-item-label > label': {
          color: '#f8fafc',
          fontWeight: 600,
          fontSize: 14,
        },
      }}
    >
      <InputComponent
        id={id}
        name={id}
        type={type === 'textarea' ? undefined : type}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          color: '#f8fafc',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 10,
          '&::placeholder': {
            color: '#64748b',
          },
        }}
      />
    </Form.Item>
  )
}

export default FormField
