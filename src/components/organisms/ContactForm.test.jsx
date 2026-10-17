import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ContactForm from './ContactForm'

// Función de ayuda: evita repetir el render y el usuario simulado en cada prueba.
// vi.fn() crea una función espía para comprobar si fue llamada y con qué datos.
const setup = (onSubmit = vi.fn()) => {
  const user = userEvent.setup()
  render(<ContactForm onSubmit={onSubmit} />)
  return { user, onSubmit }
}

describe('ContactForm', () => {
  it('muestra errores de validación si se envía vacío', async () => {
    const { user, onSubmit } = setup()
    await user.click(screen.getByRole('button', { name: /Enviar mensaje/ }))

    expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('El correo es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('rechaza un correo con formato inválido', async () => {
    const { user } = setup()
    await user.type(screen.getByLabelText('Correo electrónico'), 'no-es-correo')
    await user.tab()
    expect(screen.getByText('Ingresa un correo válido')).toBeInTheDocument()
  })

  it('envía los datos válidos y limpia el formulario', async () => {
    const { user, onSubmit } = setup()
    await user.type(screen.getByLabelText('Nombre'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Correo electrónico'), 'ada@mail.com')
    await user.type(screen.getByLabelText('Mensaje'), 'Hola, me gustaría contactarte.')
    await user.click(screen.getByRole('button', { name: /Enviar mensaje/ }))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Ada Lovelace',
      email: 'ada@mail.com',
      message: 'Hola, me gustaría contactarte.',
    })
    expect(screen.getByText('¡Mensaje enviado correctamente!')).toBeInTheDocument()
    expect(screen.getByLabelText('Nombre')).toHaveValue('')
  })
})
