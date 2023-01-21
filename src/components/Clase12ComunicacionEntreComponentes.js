import React from "react";

//Componente funcional con destructuracion recibe 2 props
function Hijo({ mensaje, funcion }) {
  return (
    <>
      <h2>{mensaje}</h2>
      <button onClick={funcion}>Incrementar contador del padre</button>
    </>
  );
}

class Clase12ComunicacionEntreComponentes extends React.Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    e.preventDefault();
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <h3>Contador padre</h3>
        <h3>{this.state.contador}</h3>
        {/* Componentes hijos modifican estado del padre por medio de funciones */}
        <Hijo
          mensaje="Mensaje para el hijo1"
          funcion={this.incrementarContador}
        />
        <br />
        <Hijo
          mensaje="Mensaje para el hijo2"
          funcion={this.incrementarContador}
        />
      </>
    );
  }
}

export default Clase12ComunicacionEntreComponentes;
