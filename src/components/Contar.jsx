import React, { useState } from 'react';

function Contar() {
  const [itens, setItens] = useState([]);
  const [contar, setContar] = useState(0);

  function alterarListagem() {
    setItens([...itens, 'Item 1', 'Item 2'])
  }

  function handleClick() {
    setContar((contar) => {
      return contar + 1;
    });
  }
  return (
    <div>
      <button onClick={alterarListagem}>Alterar listagem</button>
      <button onClick={handleClick}>Contar {contar}</button>
      {itens && (
        <ul>
          {itens.map((iten, index) => (
             <li key={index}>{iten}</li>
          ))}         
        </ul>
      )}
    </div>
  );
}

export default Contar;
