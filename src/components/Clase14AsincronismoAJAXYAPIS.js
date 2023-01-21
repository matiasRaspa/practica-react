import React from "react";

//Componente funcional local
const ComponenteParaPokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

class Clase14AsincronismoAJAXYAPIS extends React.Component {
  state = {
    pokemons: null,
  };

  componentDidMount() {
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
              pokedex.push(pokemon);
              this.setState({
                pokemons: pokedex,
              });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asíncronas (AJAX y API's)</h2>
        {/* Primero realizo un sort para ordenar los elementos por el id de menor a mayor y luego un map para renderizarlos a todos con un componente hijo */}
        {this.state.pokemons !== null ? (
          this.state.pokemons
            .sort((a, b) => a.id - b.id)
            .map((e) => {
              return (
                <ComponenteParaPokemon
                  key={e.id}
                  avatar={e.img}
                  name={e.name}
                />
              );
            })
        ) : (
          <h3>Cargando...</h3>
        )}
      </>
    );
  }
}

export default Clase14AsincronismoAJAXYAPIS;