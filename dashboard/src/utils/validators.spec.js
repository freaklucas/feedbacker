import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })
  it('should give on error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa ter no mínimo 3 caracteres')
  })
  it('should returns true when input passa correct param', () => {
    expect(validateEmptyAndLength3('12345')).toBe(true)
  })
  it('should give an error empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })
  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um e-mail')
  })
  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true)
  })
})
