import React from 'react'

function Preferencia({preferencia, valor}) {
  return (
    <div>
      <span>{preferencia}</span>
      <span>R${valor}</span>
    </div>
  )
}

export default Preferencia