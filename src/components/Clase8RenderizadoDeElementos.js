import React from "react";
//Importando datos de un json
import data from "../data/data.json";

class Clase8RenderizadoDeElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <>
        <h2>Renderizado de elementos</h2>
        {/* Renderizado desde un estado */}
        <ol>
          {this.state.seasons.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
        {/* Renderizado en un componente hijo desde un archivo json*/}
        <ul>
          {data.frameworks.map((e) => (
            <ElementoLista key={e.id} dato={e} />
          ))}
        </ul>
      </>
    );
  }
}

//Componente funcional de forma local no hace falta importar
function ElementoLista(props) {
  return (
    <li>
      <p>Id: {props.dato.id}</p>
      <p>Nombre: {props.dato.name}</p>
      <p>Web: {props.dato.web}</p>
    </li>
  );
}

export default Clase8RenderizadoDeElementos;