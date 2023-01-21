import React from "react";

class Clase6EstadosEnComponenteDeClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //Estando dentro del constructor utilizamos el metodo para intervalos para cambiar el estado
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El state</h2>
        <p>{this.state.contador}</p>
        {/* Pasando estado del componente padre al componente hijo */}
        <p>
          <Clase6PasandoEstadoAHijo contadorHijo={this.state.contador} />
        </p>
      </div>
    );
  }
}

//Componente funcional de forma local no hace falta importar
function Clase6PasandoEstadoAHijo(props) {
  return <>{props.contadorHijo}</>;
}

export default Clase6EstadosEnComponenteDeClase;