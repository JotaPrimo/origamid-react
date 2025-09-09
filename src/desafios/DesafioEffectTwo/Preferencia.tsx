import React from 'react';

interface PreferenciaProps {
  preferencia: string;
  valor: string;
}

function Preferencia({ preferencia, valor }: PreferenciaProps) {
  return (
    <div>
      <span>{preferencia}</span>
      <span>R${valor}</span>
    </div>
  );
}

export default Preferencia;
