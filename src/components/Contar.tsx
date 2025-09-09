import React, { useEffect, useState } from 'react';

function Contar() {
  const [contar, setContar] = useState(0);

  useEffect(() => {
   console.log("Executou apenas uma vez, por causa do effetc");   
  }, []);

  function handleClick() {
    console.log('handleClick')
   setContar((contar) => contar + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default Contar;