import React from 'react';


interface ButtonDesafioProps {
  label: string;
  classStyle: string;
  onClick: () => void;
}

function ButtonDesafio({
  label = 'Label default',
  classStyle,
  onClick,
}: ButtonDesafioProps) {
  return (
    <button className={classStyle} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonDesafio;
