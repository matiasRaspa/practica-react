import React from "react";

//Componente de prueba para desmontar
class Reloj extends React.Component {
  //El componente deja de existir y lo desmontamos del DOM con este metodo
  componentWillUnmount() {
    console.log(4, "El componente se ha desmontado correctamente");
  }

  render() {
    return (
      <>
        <h4>{this.props.mensaje}</h4>
        <h3>{this.props.hora}</h3>
      </>
    );
  }
}

class Clase13CicloDeVidaEnComponentesDeClase extends React.Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      temporizador: null,
      visible: false,
    };
  }

  iniciar = () => {
    this.setState({
      temporizador: setInterval(() => {
        this.setState({
          hora: new Date().toLocaleTimeString(),
          visible: true,
        });
      }, 1000),
    });
  };

  detener = () => {
    this.setState({
      temporizador: clearInterval(this.state.temporizador),
      visible: false,
    });
  };

  //Se monta en el DOM el componente
  componentDidMount() {
    console.log(2, "El componente ya se encuentra en el DOM");
  }
  //Se actualiza el componente. Props previas y Estado previo son los parametros que recibe este metodo y que podemos vizualizar por consola
  componentDidUpdate(prevProps, prevState) {
    console.log(3, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    console.log(
      1,
      "El componente se dibuja(o redibuja por algun cambio) en el DOM"
    );
    return (
      <>
        <h2>Ciclo de vida en componentes de clase</h2>
        <h3>{this.state.hora}</h3>
        {this.state.visible ? (
          <Reloj mensaje="Componente de clase 'Reloj'" hora={this.state.hora} />
        ) : (
          <h4>Componente desmontado</h4>
        )}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}

export default Clase13CicloDeVidaEnComponentesDeClase;
