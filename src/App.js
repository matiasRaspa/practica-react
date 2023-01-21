import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clase4ComponenteDeClase from "./components/Clase4ComponenteDeClase";
import Clase4ComponenteFuncional from "./components/Clase4ComponenteFuncional";
import Clase5Propiedades from "./components/Clase5Propiedades";
import Clase6EstadosEnComponenteDeClase from "./components/Clase6EstadosEnCompomponenteDeClase";
import Clase7RenderizadoCondicional from "./components/Clase7RenderizadoCondicional";
import Clase8RenderizadoDeElementos from "./components/Clase8RenderizadoDeElementos";
import Clase9EventosEnComponenteDeClase from "./components/Clase9EventosEnComponenteDeClase";
import Clase10EventosES7EnComponenteDeClase from "./components/Clase10EventosES7EnComponenteDeClase";
import Clase11EventosComponenteDeClaseAvanzado from "./components/Clase11EventosComponenteDeClaseAvanzado";
import Clase12ComunicacionEntreComponentes from "./components/Clase12ComunicacionEntreComponentes";
import Clase13CicloDeVidaEnComponentesDeClase from "./components/Clase13CicloDeVidaEnComponentesDeClase";
import Clase14AsincronismoAJAXYAPIS from "./components/Clase14AsincronismoAJAXYAPIS";
import Clase16HooksUseState from "./components/Clase16HooksUseState";
import Clase17HooksUseEffect from "./components/Clase17HooksUseEffect";
import Clase18RelojHooks from "./components/Clase18RelojHooks";
import Clase19AjaxHooks from "./components/Clase19AjaxHooks";
import Clase20CustomHooks from "./components/Clase20CustomHooks";
import Clase21Referencias from "./components/Clase21Referencias";
import Clase22Formularios from "./components/Clase22Formularios";
import Clase22Formularios2Optimizado from "./components/Clase22Formularios2Optimizado";
import Clase23Estilos from "./components/Clase23Estilos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Clase4ComponenteDeClase mensaje="Hola soy un componente de clase con props" />
        <hr />
        <Clase4ComponenteFuncional mensaje="funcional" />
        <hr />
        <Clase5Propiedades
          cadena="Esto es una cadena de texto"
          numero={28}
          booleano={true}
          array={[1, 2, 3]}
          objeto={{ tipo: "Pelota", deporte: "Futbol", tamanio: 5 }}
          elementoReact={<i>Esto es un elemento react</i>}
          funcion={(num) => num + num}
          componenteReact={
            <Clase4ComponenteDeClase mensaje="Hola soy un componente de clase con props pasado como props en otro componente" />
          }
        />
        <hr />
        <Clase6EstadosEnComponenteDeClase />
        <hr />
        <Clase7RenderizadoCondicional />
        <hr />
        <Clase8RenderizadoDeElementos />
        <hr />
        <Clase9EventosEnComponenteDeClase/>
        <hr />
        <Clase10EventosES7EnComponenteDeClase/>
        <hr />
        <Clase11EventosComponenteDeClaseAvanzado/>
        <hr />
        <Clase12ComunicacionEntreComponentes/>
        <hr />
        <Clase13CicloDeVidaEnComponentesDeClase/>
        <hr />
        <Clase14AsincronismoAJAXYAPIS/>
        <hr />
        <Clase16HooksUseState/>
        <hr />
        <Clase17HooksUseEffect/>
        <hr />
        <Clase18RelojHooks/>
        <hr />
        <Clase19AjaxHooks/>
        <hr />
        <Clase20CustomHooks/>
        <hr />
        <Clase21Referencias/>
        <hr />
        <Clase22Formularios/>
        <hr />
        <Clase22Formularios2Optimizado/>
        <hr />
        <Clase23Estilos/>
        <hr />
      </section>
    </div>
  );
}

export default App;