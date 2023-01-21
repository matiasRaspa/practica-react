import React, { useState, useEffect } from "react";

//Componente local
const Reloj = ({ hora }) => {
  return (
    <>
      <h3>{hora}</h3>
    </>
  );
};

const Clase18RelojHooks = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      <h3>
        {visible ? <Reloj hora={hora} /> : "Reloj no iniciado o detenido"}
      </h3>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Detener
      </button>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Iniciar
      </button>
    </>
  );
};

export default Clase18RelojHooks;
