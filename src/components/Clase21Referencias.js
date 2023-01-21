//Importo createRef para componentes de clase y useRef para hooks(componentes funcionales)
import React, { /* createRef, */ useRef } from "react";

const Clase21Referencias = () => {
  //Para componentes de clase
  /* let refMenuClass = createRef(),
    refMenuBtnClass = createRef(); */
  let refMenu = useRef(),
    refMenuBtn = useRef();

  console.log(refMenu, refMenuBtn);

  //Menú desplegable con display none
  const handleToggleMenu1 = (e) => {
    e.preventDefault();
    const menu = document.getElementById("menu");
    if (e.target.textContent === "Menú 1") {
      e.target.textContent = "Cerrar";
      menu.style.display = "block";
    } else {
      e.target.textContent = "Menú 1";
      menu.style.display = "none";
    }
  };

  //Menú desplegable con referencias
  const handleToggleMenu2 = (e) => {
    e.preventDefault();
    if (refMenuBtn.current.textContent === "Menú 2") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú 2";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      {/* Boton con display none */}
      <button id="menu-btn" onClick={handleToggleMenu1}>
        Menú 1
      </button>
      <nav id="menu" style={{ display: "none" }}>
        <a href="sinHref"> Sección 1</a>
        <br />
        <a href="sinHref"> Sección 2</a>
        <br />
        <a href="sinHref"> Sección 3</a>
        <br />
        <a href="sinHref"> Sección 4</a>
        <br />
        <a href="sinHref"> Sección 5</a>
      </nav>
      <br />
      {/* Boton con referencia */}
      <button onClick={handleToggleMenu2} ref={refMenuBtn}>
        Menú 2
      </button>
      <nav style={{ display: "none" }} ref={refMenu}>
        <a href="sinHref"> Sección 1</a>
        <br />
        <a href="sinHref"> Sección 2</a>
        <br />
        <a href="sinHref"> Sección 3</a>
        <br />
        <a href="sinHref"> Sección 4</a>
        <br />
        <a href="sinHref"> Sección 5</a>
      </nav>
    </>
  );
};

export default Clase21Referencias;
