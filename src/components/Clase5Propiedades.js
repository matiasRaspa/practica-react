import React from "react";

function Clase5Propiedades(props) {
  return (
    <>
      {/* props seteadas por defecto */}
      <h2>{props.porDefecto}</h2>
      {/* props enviadas al componente */}
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "True" : "False"}</li>
        <li>{props.array.join(", ")}</li>
        <li>
          {props.objeto.tipo +
            " - " +
            props.objeto.deporte +
            " - " +
            props.objeto.tamanio}
        </li>
        <li>{props.elementoReact}</li>
        {/* Usando una funcion pasada por props */}
        <li>
          {props.array.map(props.funcion).join(", ")}
        </li>
            <li>{props.componenteReact}</li>
      </ul>
    </>
  );
}

export default Clase5Propiedades;

//Propiedades por defecto se pueden setear de esta manera
Clase5Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

//Se puede hacer uso de la libreria npm i prop-types para forzar el tipo de dato que queremos que sea una prop