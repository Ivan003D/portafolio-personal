import { Form, Input } from 'antd'

// Sirve para texto, correo y área de texto, así no repetimos código tres veces.
const FormField = ({ id, label, type = 'text', value, error, onChange, onBlur, rows }) => {
    const InputComponent = type === 'textarea' ? Input.TextArea : Input
    return (
        <Form.Item
            label={label}
            htmlFor={id} // Conecta la etiqueta con el input (accesibilidad y tests)
            validateStatus={error ? 'error' : ''} // Pinta el campo en rojo si hay error
            help={error || undefined} // Muestra el mensaje de error debajo
        >
            <InputComponent
                id={id}
                name={id}
                type={type === 'textarea' ? undefined : type}
                rows={rows}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Form.Item>
    )
}

export default FormField
