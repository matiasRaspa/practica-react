import React from "react";

class Clase10EventosES7EnComponenteDeClase extends React.Component {
  //Properties initializer remplaza al constructor en ES7
  state = {
    contador: 0,
  };
  //Arrow funccion para no utilizar el bind por que heredan el this de la clase a la que pertenecen
  sumar = (e) => {
    e.preventDefault();
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  //Arrow funccion para no utilizar el bind por que heredan el this de la clase a la que pertenecen
  restar = (e) => {
    e.preventDefault();
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <>
        <h2>
          Eventos en componentes de clase Version ES7 sin constructor y sin bind
        </h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </nav>
      </>
    );
  }
}

export default Clase10EventosES7EnComponenteDeClase;