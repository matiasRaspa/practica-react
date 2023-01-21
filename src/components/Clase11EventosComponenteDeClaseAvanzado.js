import React from "react";

class Clase11EventosComponenteDeClaseAvanzado extends React.Component {
  handleClick = (e, mensaje) => {
    e.preventDefault();
    //Inspeccion en consola de los eventos
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <>
        <h2>Mas sobre eventos en componentes de clase</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento personalizado: La propiedad onClick pertenese a jsx no a la etiqueta button por lo tanto no funcionara
        <Boton onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }/> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        />
      </>
    );
  }
}

//Componente funcional de forma local no hace falta importar
/* function Boton() {
  return <button>Boton hecho componente</button>;
} */

//Restructuracion de esta funcion version 1
/* function Boton(props) {
  return <button onClick={props.myOnClick}>Boton hecho componente</button>;
} */
//Restructuracion de esta funcion version 2 con destructuracion
/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Boton hecho componente</button>
); */
const Boton = ({myOnClick}) => (
  <button onClick={myOnClick}>Boton hecho componente</button>
);

export default Clase11EventosComponenteDeClaseAvanzado;