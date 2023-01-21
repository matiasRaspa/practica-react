import React, { useState } from "react";

const Clase22Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState({
    condiciones: false,
    publicidad: false,
  });

  //Armo el objeto con los datos que recibo del form
  const handleSubmitform = (e) => {
    //Esta funcion Evita que se recarge la pagina al darle al boton enviar
    e.preventDefault();

    let data = {
      nombre: nombre,
      apellido: apellido,
      sabor: sabor,
      lenguaje: lenguaje,
    };

    alert(
      "El formulario se ha enviado correctamente con: \n Nombre: " +
        data.nombre +
        "\n Apellido: " +
        data.apellido +
        "\n Sabor favorito de JS: " +
        data.sabor +
        "\n Lenguaje de programacion favorito: " +
        data.lenguaje
    );
  };

  //Forma 1: Manejador de cambios en el input nombre
  const handleNombreInput = () => {
    let nombre = document.getElementById("nombre");
    setNombre(nombre.value);
    //console.log(nombre.value);
  };

  return (
    <>
      <h2>Formularios</h2>
      {/* //Atributo onSubmit para el disparador: submit(envio) */}
      <form onSubmit={handleSubmitform}>
        <h3>Inicio del form</h3>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          placeholder="Escribe tu nombre"
          onChange={handleNombreInput}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        {/* Forma 2: Manejador como callback en el atributo onChange */}
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={apellido}
          placeholder="Escribe tu apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
        {/* Input radio */}
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="Angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <br />
        {/* propiedad Default checked  para preseleccionar opciones o rellenar formularios por defecto al cargar el DOM*/}
        <input
          type="radio"
          id="reactjs"
          name="sabor"
          value="ReactJS"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="reactjs">ReactJS</label>
        <br />
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="Vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elige tu lenguaje de programacion favorito</p>
        {/* Select */}
        <select name="lenguajes" onChange={(e) => setLenguaje(e.target.value)}>
          <option value="">Lenguajes</option>
          <option value="JS">JavaScript</option>
          <option value="PY">Python</option>
          <option value="GO">GO</option>
          <option value="PHP">PHP</option>
        </select>
        {/* Checkbox: opciones multiples */}
        <br />
        <label htmlFor="terminos">Aceptar terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          value={true}
          onChange={(e) =>
            setTerminos({
              condiciones: e.target.checked,
              publicidad: terminos.publicidad,
            })
          }
        />
        <br />
        <label htmlFor="terminos">Permitir correos publicitarios</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          value={true}
          onChange={(e) =>
            setTerminos({
              condiciones: terminos.condiciones,
              publicidad: e.target.checked,
            })
          }
        />
        {/* Boton de envio del form */}
        <br />
        <button type="submit">Enviar</button>
        <h3>Fin del form</h3>
      </form>
    </>
  );
};

export default Clase22Formularios;
