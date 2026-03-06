import React, { useState } from "react";

export const PrimerComponents = () => {
  //let nombre = "Joaquin";
  let web = "www.joaquin.com";

  const [nombre, setnombre] = useState("Joaquin");

  let cursos = ["Master en JavaScript", "Master en React", "Master en CSS"];

  const cambiarNombre = (nuevoNombre) => {
    setnombre(nuevoNombre);
  };

  return (
    <div>
      <h1>Primer Componente</h1>
      <p>Hola Mundo</p>
      <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde':'rojo'}>{nombre}</strong></p>
      <p>Visita mi web: {web}</p>

      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="cambiar nombre"
      />

      <button
        onClick={(e) => {
          console.log("El valor guardado en tu estado es ", nombre);
        }}
      >
        Mostrar valor de estado
      </button>

      <button onClick={(e) => cambiarNombre("JOAQUIN WEB")}>
        Cambiar Nombre
      </button>

      <h2>Cursos</h2>
      <ul>
        {cursos.map((cursos, indice) => {
          return <li key={indice}>{cursos}</li>;
        })}
      </ul>
    </div>
  );
};
