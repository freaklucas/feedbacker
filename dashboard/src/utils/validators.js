export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }
  if (value.leght < 3) {
    return '*Este campo precisa ter no mínimo 3 caracteres'
  }
  return true
}
export function validateEmptyAndEmail (value) {
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }

  return true
}
