import React from "react";
//Importo archivo css convenientemente con el mismo nombre que el componente
import "../styles-css/Clase23Estilos.css";
//Importo hoja de estilos en forma de modulos
import moduleStyles from "../styles-css/Clase23Estilos.module.css";
//Importamos archivo de estilo de sass (npm install node-sass para instalar)
import "../styles-scss/Clase23Estilos.scss";

const Clase23Estilos = () => {
  //Tambien puedo crear una variable con estilos para pasarla al atributo style
  let myStyles = {
    borderRadius: "0.5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <>
      <h2>Estilos css en react</h2>
      <section className="estilos">
        <h3 className="bg-react">Estilos en hoja CSS externa</h3>
        {/* Puedo colocar estilos en linea con el atributo style */}
        <h3
          className="bg-react"
          style={{ borderRadius: "0.25rem", margin: "1rem" }}
        >
          Estilos en linea con el atributo style
        </h3>
        {/* Coloco la variable como parametro en el atributo style */}
        <h3 className="bg-react" style={myStyles}>
          Estilos en linea con el atributo style
        </h3>
        {/* Normalizador de estilos para renderizacion en distintos navegadores. Debe estar incluida en un archivo css superior. Como por ejemplo el index.css*/}
        <h3 className="bg-react">
          Agregando Normalize con
          <br />
          <code>@import-normalize;</code>
        </h3>
        {/* Importo mis estilos en forma de modulo dentro del className y puedo acceder a cada uno de las configuraciones con el . como si fueran metodos. Ej: moduleStyles.error*/}
        <h3 className={moduleStyles.error}>Estilos con modulos</h3>
        <h3 className={moduleStyles.succes}>Estilos con modulos</h3>
        {/* Estilos con SASS aplicando un hover de ejemplo */}
        <h3 className="bg-sass">Estilos con SASS</h3>
      </section>
    </>
  );
};

export default Clase23Estilos;
