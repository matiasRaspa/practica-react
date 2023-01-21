import React from "react";
//Importo mi custom hook
import { useFetch } from "../hooks/useFetch";

const Clase20CustomHooks = () => {
  //console.log(useFetch());

  //Url de ejemplo
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //Otra url de prueba
  url = "https://jsonplaceholder.typicode.com/users";

  //Destructuro el objeto del useFetch
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Custom hooks</h2>
      {/* Convierto a string */}
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code>
          <h3>{JSON.stringify(data)}</h3>
        </code>
      </pre>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{JSON.stringify(error)}</h3>
    </>
  );
};

export default Clase20CustomHooks;
