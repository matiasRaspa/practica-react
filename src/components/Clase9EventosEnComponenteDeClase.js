import React from "react";

class Clase9EventosEnComponenteDeClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //Bindeo de funciones dentro del constructor para poder usar el this en otro contexto
    this.sumar= this.sumar.bind(this)
    this.restar= this.restar.bind(this)
  }

  sumar(e) {
    e.preventDefault();
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    e.preventDefault();
    //Si no hago el bind el this es undefined
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <>
        <h2>Eventos en componentes de clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </nav>
      </>
    );
  }
}

export default Clase9EventosEnComponenteDeClase;