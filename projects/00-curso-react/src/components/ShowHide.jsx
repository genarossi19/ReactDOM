import React, { useState } from 'react'

function ShowHide() {

    const [show, setShow]= useState(true);{/*true es el valor por defecto del estado. con la funcion setShow la cambiamos*/}

const handleClick= ()=>{
    setShow(!show)
}

  return (
    <div>
       
        {<button onClick={handleClick}>{show ? "Ocultar" : "Mostrar"}</button>}
       
        {show && <h2>Ocultar</h2>} {/*Esto funciona asi. El h2 es siempre verdadero, entonces  al estar con un && con show, solo se va a mostrar si show tambien es verdadero*/ }
        
        
    
    </div>
  )
}

export default ShowHide