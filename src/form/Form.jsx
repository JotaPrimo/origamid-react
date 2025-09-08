import React from 'react'
import Input from './Input'
import ButtonSubmit from './ButtonSubmit'

const Form = () => {
  return (
    <form>
      <Input inputId={'nome'} label={'Nome'} type={'text'} placeholder='Informe seu nome' />   <br />  
      <Input inputId={'email'} label={'Email'} type={'email'} placeholder='Informe seu email' />   <br />  
      <Input inputId={'password'} label={'Senha'} type={'password'} placeholder='Informe sua senha' />      <br />  
      <ButtonSubmit label='Salvar' />
    </form>
  )
}

export default Form