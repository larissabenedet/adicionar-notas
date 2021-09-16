import React from "react";
import CardNota from "../CardNota";
import "./estilo.css";
const ListaDeNotas = ({ notas }) => {
  return (
    <ul className="lista-notas">
      {notas.map((nota, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <CardNota titulo={nota.titulo} texto={nota.texto} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListaDeNotas;
