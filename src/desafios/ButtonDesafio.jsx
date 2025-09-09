import React from 'react'
import './ButtonDesafio.css'


function ButtonDesafio({label = 'Label default', classStyle, onClick}) {
  return <button className={classStyle} onClick={onClick}>{label}</button>
}

export default ButtonDesafio