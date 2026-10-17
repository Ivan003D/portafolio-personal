const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Cada validador devuelve '' si el valor es correcto, o el mensaje de error si no.
// Son funciones puras (no dependen de nada externo), por eso son fáciles de probar.
export const validateName = (value) => {
  const name = value.trim()
  if (!name) return 'El nombre es obligatorio'
  if (name.length < 2) return 'El nombre debe tener al menos 2 caracteres'
  return ''
}

export const validateEmail = (value) => {
  const email = value.trim()
  if (!email) return 'El correo es obligatorio'
  if (!EMAIL_REGEX.test(email)) return 'Ingresa un correo válido'
  return ''
}

export const validateMessage = (value) => {
  const message = value.trim()
  if (!message) return 'El mensaje es obligatorio'
  if (message.length < 10) return 'El mensaje debe tener al menos 10 caracteres'
  return ''
}

// Objeto que relaciona cada campo con su validador: evita escribir un if/else largo
const validators = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
}

export const validateField = (field, value) => validators[field](value)

// reduce() recorre los campos y va armando un objeto solo con los que tienen error.
// El spread (...errors) crea un objeto nuevo en vez de modificar el anterior (sin mutaciones).
export const validateForm = (values) =>
  Object.keys(validators).reduce((errors, field) => {
    const error = validateField(field, values[field])
    return error ? { ...errors, [field]: error } : errors
  }, {})
