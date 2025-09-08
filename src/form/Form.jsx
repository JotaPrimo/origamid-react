import React from 'react';
import Input from './Input';
import ButtonSubmit from './ButtonSubmit';

const Form = () => {
  return (
    <form>
      <Input label={'Email'} id={'email'} requeired placeholder='Informe seu email' />
      <Input label={'Password'} id={'password'} type="password" placeholder='Informe sua senha' />
      <ButtonSubmit label="Salvar" />
    </form>
  );
};

export default Form;
