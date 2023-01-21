import React, { useState, useEffect } from "react";

const Clase17HooksUseEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Dectector de cambios");
    window.addEventListener("scroll", () => setScrollY(window.pageYOffset));

    //El segundo parametro entre [] es el que al detectar un cambio de la variable que le pasemos  ejecuta nuevamente el useEffect, si lo dejamos vacio solo se ejecuta el useEffect una vez
  }, [scrollY]);

  return (
    <>
      <h2>Hooks: useEffect y el ciclo de vida</h2>
      <p>
        Scroll Y del navegador <b>{scrollY}px</b>
      </p>
    </>
  );
};

export default Clase17HooksUseEffect;