import React from 'react'

interface TituloProps {
  cor: string, 
  texto: string,
  children: string
}

const Titulo = ({ cor, texto, children }: TituloProps) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
      </h1>
  )
}

export default Titulo