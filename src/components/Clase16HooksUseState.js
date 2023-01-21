//Importo useState para usar el estado en hooks
import React, { useState } from "react";

//Recibo las props en el componente o tambien puedo destructurar
const Clase16HooksUseState = ({titulo}) => {
  //Declaro mi variable y la seteo por default en 0
  const [contador, setContador] = useState(0);

  const sumar = () =>{
    //Seteo mi variable
    setContador(contador + 1)
  }
  
  const restar = () =>{
    //Seteo mi variable
    setContador(contador - 1)
  }

  return (
    <>
      <h2>Hooks: useState</h2>
      <nav>
        {/* Invoco mi variable y no hace falta utilizar el this como en los componentes de clase */}
        <h3>{contador}</h3>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <p>contador de {titulo}</p>
      </nav>
    </>
  );
};

//Puedo utilizar props por defalult de esta manera o pasarle props al componente desde el padre
Clase16HooksUseState.defaultProps={
  titulo: "Clicks",
}

export default Clase16HooksUseState;