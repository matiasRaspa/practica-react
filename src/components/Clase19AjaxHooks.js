import React, { useState, useEffect } from "react";

//Componente funcional local
const ComponenteParaPokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

const Clase19AjaxHooks = () => {
  const [pokemons, setPokemons] = useState([]);

  /* useEffect(() => {
    //Consulto con un fetch a la api de pokemon para traer asincronicamente datos desde la misma api y se coloca en este metodo ya que es cuando se monta el componente en el DOM
    let url = "https://pokeapi.co/api/v2/pokemon/";
    //Variable auxiliar creada antes del foreach para guardar datos antes de pasarlos al estado
    let pokedex = [];
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //Veo por consola los datos que trae el fetch
        //console.log(data);
        data.results.forEach((e) => {
          //Segundo fetch a cada url de los datos del primer fetch
          fetch(e.url)
            .then((res) => res.json())
            .then((data) => {
              //Veo por consola los datos que trae el fetch
              //console.log(data);
              //Creo un objeto y guardo cada objeto en mi array de estado con setState
              let pokemon = {
                id: data.id,
                name: data.name,
                img: data.sprites.front_default,
              };
              //Guardo en mi hook(estado) los objetos con los datos del fetch
              pokedex.push(pokemon);
              setPokemons(pokedex);
            });
        });
      });
  }, []); */

  //REFACTORIZADO CON ASYNC Y AWAIT
  useEffect(() => {
    //No se recomienda volver asincrono el use effect por eso se recomienda generar una funcion dentro.
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //Veo por consola los datos que trae el fetch
      //console.log(json)
      //Variable auxiliar creada antes del foreach para guardar datos antes de pasarlos al estado
      let pokedex = [];
      json.results.forEach(async (e) => {
        //Segundo fetch a cada url de los datos del primer fetch
        let res = await fetch(e.url),
          json = await res.json();
        //Veo por consola los datos que trae el segundo fetch
        //console.log(json);
        //Creo un objeto y guardo cada objeto en mi array de estado con setState
        let pokemon = {
          id: json.id,
          name: json.name,
          img: json.sprites.front_default,
        };
        //Guardo en mi hook(estado) los objetos con los datos del fetch
        pokedex.push(pokemon);
        setPokemons(pokedex);
        //Segunda forma mas simple
        //setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Ajax con hooks</h2>
      {/* Primero realizo un sort para ordenar los elementos por el id de menor a mayor y luego un map para renderizarlos a todos con un componente hijo */}
      {pokemons.length !== 0 ? (
        pokemons
          .sort((a, b) => a.id - b.id)
          .map((e) => {
            return (
              <ComponenteParaPokemon key={e.id} avatar={e.img} name={e.name} />
            );
          })
      ) : (
        <h3>Cargando...</h3>
      )}
    </>
  );
};

export default Clase19AjaxHooks;
