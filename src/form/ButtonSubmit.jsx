import React from 'react'

const ButtonSubmit = ({label = 'Enviar'}) => {
  return (
    <button type='submit'>{label}</button>
  )
}

export default ButtonSubmit