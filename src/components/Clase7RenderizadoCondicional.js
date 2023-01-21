import React from "react";

class Clase7RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  
  render() {
    return (
      <div>
        <h2>Renderizado condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}

//Componente funcional de forma local no hace falta importar
function Login() {
  return (
    <>
      <h3>Login</h3>
    </>
  );
}
//Componente funcional de forma local no hace falta importar
function Logout() {
  return (
    <>
      <h3>Logout</h3>
    </>
  );
}

export default Clase7RenderizadoCondicional;