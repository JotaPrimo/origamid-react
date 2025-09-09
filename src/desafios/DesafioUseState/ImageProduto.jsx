import React from 'react'
import './ImageProduto.css'

function ImageProduto({nome, preco, urlImage, descricao = 'Descrição default', altImage = 'alt image of produto'}) {
  return (
    <div className='infos-produto'>      
      <img 
        src={urlImage} 
        alt={altImage} 
        width='300px'
        height='300px'
      />
      <span>{nome} : R${preco}</span>
      <p>{descricao}</p>
    </div>
  )
}

export default ImageProduto