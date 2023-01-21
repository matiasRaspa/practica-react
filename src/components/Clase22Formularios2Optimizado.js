import React, { useState } from "react";

const Clase22Formularios2Optimizado = () => {
  //Declaro objeto vacio para llenarlo con los datos del form
  const [form, setForm] = useState({});

  //Manejador para actualizar los datos de mi form que el usuario va a ingresando
  const handleChange = (e) => {
    setForm({
      //Spread operator ... para expandir los datos y mezclarlos con los nuevos datos.
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //Manejador para los campos checked
  const handleChangeChecked = (e) => {
    setForm({
      //Spread operator ... para expandir los datos y mezclarlos con los nuevos datos.
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  //Armo el objeto con los datos que recibo del form
  const handleSubmitform = (e) => {
    //Esta funcion Evita que se recarge la pagina al darle al boton enviar
    e.preventDefault();
    /* console.log(form); */

    let data = {
      nombre: form.nombre,
      apellido: form.apellido,
      sabor: form.sabor,
      lenguaje: form.lenguajes,
      terminos: form.terminos ? "Si" : "No",
      publicidades: form.publicidades ? "Si" : "No",
    };

    alert(
      "El formulario se ha enviado correctamente con: \n Nombre: " +
        data.nombre +
        "\n Apellido: " +
        data.apellido +
        "\n Sabor favorito de JS: " +
        data.sabor +
        "\n Lenguaje de programacion favorito: " +
        data.lenguaje +
        "\n Terminos y condiciones: " +
        data.terminos +
        "\n Envio de publicidades e intereses: " +
        data.publicidades
    );
  };

  return (
    <>
      <h2>Formularios 2</h2>
      {/* //Atributo onSubmit para el disparador: submit(envio) */}
      <form onSubmit={handleSubmitform}>
        <h3>Inicio del form</h3>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          //Coloco el objeto form por delante
          value={form.nombre}
          placeholder="Escribe tu nombre"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        {/* Forma 2: Manejador como callback en el atributo onChange */}
        <input
          type="text"
          id="apellido"
          name="apellido"
          //Coloco el objeto form por delante
          value={form.apellido}
          placeholder="Escribe tu apellido"
          onChange={handleChange}
        />
        {/* Input radio */}
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="Angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <br />
        {/* propiedad Default checked  para preseleccionar opciones o rellenar formularios por defecto al cargar el DOM*/}
        <input
          type="radio"
          id="reactjs"
          name="sabor"
          value="ReactJS"
          onChange={handleChange}
        />
        <label htmlFor="reactjs">ReactJS</label>
        <br />
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="Vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <p>Elige tu lenguaje de programacion favorito</p>
        {/* Select */}
        <select name="lenguajes" onChange={handleChange}>
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
          //Coloco el objeto form por delante
          value={form.terminos}
          onChange={handleChangeChecked}
        />
        <br />
        <label htmlFor="publicidades">Permitir correos publicitarios</label>
        <input
          type="checkbox"
          id="publicidades"
          name="publicidades"
          //Coloco el objeto form por delante
          value={form.publicidades}
          onChange={handleChangeChecked}
        />
        {/* Boton de envio del form */}
        <br />
        <button type="submit">Enviar</button>
        <h3>Fin del form</h3>
      </form>
    </>
  );
};

export default Clase22Formularios2Optimizado;
