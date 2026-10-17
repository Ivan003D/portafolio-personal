import { useState } from 'react'
import { validateField, validateForm } from '../utils/validators'

const INITIAL_VALUES = { name: '', email: '', message: '' }

// Custom hook: reúne toda la lógica del formulario para que el componente solo se preocupe de mostrarlo
const useContactForm = (onSubmit) => {
  const [values, setValues] = useState(INITIAL_VALUES) // Lo que el usuario ha escrito
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({}) // Campos que el usuario ya visitó (para no mostrar errores antes de tiempo)
  const [status, setStatus] = useState('idle') // idle | success

  // Función que devuelve otra función (currying): permite usar handleChange('name') en cada input
  const handleChange = (field) => (event) => {
    const { value } = event.target // Destructuring: saca "value" del objeto event.target
    setValues((prev) => ({ ...prev, [field]: value })) // Copia el estado anterior y cambia solo un campo (sin mutar)
    setStatus('idle') // Si vuelve a escribir, se oculta el mensaje de éxito
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) })) // Revalida mientras escribe
    }
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true })) // Marca el campo como visitado al salir de él
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()// Evita que el navegador recargue la página al enviar
    const formErrors = validateForm(values)
    setTouched({ name: true, email: true, message: true }) // Al enviar, se muestran todos los errores
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) return // Si hay errores, no se envía nada

    if (onSubmit) onSubmit(values)
    setValues(INITIAL_VALUES) // Limpia el formulario
    setTouched({})
    setErrors({})
    setStatus('success')
  }

  return { values, errors, status, handleChange, handleBlur, handleSubmit }
}

export default useContactForm
