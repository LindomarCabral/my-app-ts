import {login} from './login'

describe('login', () => {
  const mocAlert = jest.fn()
  window.alert = mocAlert
  it('Deve exibir um alert com boas vindas', () =>{
    login()
    expect(mocAlert).toHaveBeenCalledWith('Bem vinda!')
  })
})