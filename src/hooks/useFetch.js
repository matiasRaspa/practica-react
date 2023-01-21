import { useState, useEffect } from "react";

//Exporto sin el default para tener que llamar al custom hook exactamente por su nombre y que no se pueda cambiar, ademas de poder agregar mas custom hooks en el mismo archivo y exportar varios a la vez.
export const useFetch = (url) => {
  //Datos
  const [data, setData] = useState(null);
  //Pendiente de recibir datos o no
  const [isPending, setIsPending] = useState(true);
  //Errores en respuesta
  const [error, setError] = useState(null);

  useEffect(() => {
    //No se recomienda volver asincrono el use effect por eso se recomienda generar una funcion asinctrona dentro.
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        //Si la respuesta es falsa lanzamos mensaje con error
        if (!res.ok) {
          //Creo objeto de error
          let objetoError = {
            err: true,
            statusbar: res.status,
            //Si la variable viene vacia entonces enviamos un mensaje sino enviamos el estado de la respuesta
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
          //Lanzo objeto error con throw
          throw objetoError;
        }
        //Convierto los datos que recibo a json si no se recibio ningun error
        let data = await res.json();

        //Seteo mis estados si todo esta OK
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        //Seteo mis estados si hay error menos la data ya que si hay errores en proximos pedidos pero originalmente no los habia lo que ya trae desde el fetch queda en el estado y no se pierde el renderizado en la web
        setIsPending(true);
        setError(err);
      }
    };

    //Llamado de la funcion asincrona
    getData(url);
  }, [url]);

  //Retorno estados
  return { data, isPending, error };
};
