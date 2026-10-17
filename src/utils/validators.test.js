import { describe, expect, it } from 'vitest'
import { validateEmail, validateForm, validateMessage, validateName } from './validators'

describe('validators', () => {
  it('valida el nombre', () => {
    expect(validateName('')).not.toBe('')
    expect(validateName('A')).not.toBe('')
    expect(validateName('Ada')).toBe('')
  })

  it('valida el correo', () => {
    expect(validateEmail('x')).not.toBe('')
    expect(validateEmail('a@b.cl')).toBe('')
  })

  it('valida el mensaje', () => {
    expect(validateMessage('corto')).not.toBe('')
    expect(validateMessage('un mensaje suficientemente largo')).toBe('')
  })

  it('validateForm devuelve solo los campos con error', () => {
    const errors = validateForm({ name: 'Ada', email: 'mal', message: '' })
    expect(Object.keys(errors)).toEqual(['email', 'message'])
  })
})
