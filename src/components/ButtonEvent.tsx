import type React from "react";

interface ButtonEventProps {
  label: string
}

const ButtonEvent = ({label}: ButtonEventProps) => {

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event);    
  }

  return <>
    <button onClick={handleClick}>{label}</button>
  </>
}

export default ButtonEvent