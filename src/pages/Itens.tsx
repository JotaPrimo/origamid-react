import React, { useState } from 'react'

function Itens() {
  const [itens, setItens] = useState(['PC Gamer', 'Monitor 4k', 'Headset'])

  function handleClickReativo() {
    // setItens([...itens, 'Novo Item'])
    setItens(['Novo Item', ...itens])
  }

  return (
    <div>
      Itens
      <button onClick={handleClickReativo}>Adicionar</button>

      <ul>
        {itens.map((iten, index) => (
          <li key={index}>{iten}</li>
        ) )}
        { itens.length === 0 && (
          <li>Sem regitros</li>
        )}
      </ul>
    </div>
  )
}

export default Itens