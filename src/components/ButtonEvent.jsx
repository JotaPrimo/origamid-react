const ButtonEvent = ({label}) => {

  function handleClick(event) {
    console.log(event);    
  }

  return <>
    <button onClick={handleClick}>{label}</button>
  </>
}

export default ButtonEvent