import { useState } from "react";
import Button from "./Button";

const NavMain = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert('Função definida no componente pai');
    setCount(count + 1)
  }

  return (
    <>
      <nav>
        <a href="#">Navbar</a>
        <Button label={'Action'} onClick={handleClick} />
        <Button label={'Action 2'} onClick={handleClick} />
      </nav>
    </>
  );
};

export default NavMain;