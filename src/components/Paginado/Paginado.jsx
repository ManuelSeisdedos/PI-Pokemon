import React from "react";
import s from "./Paginado.module.css";
export default function Paginado({ pokemonsPerPage, pokemons, paginado }) {
  const pageNumber = [];

  for (let index = 1; index <= Math.ceil(pokemons / pokemonsPerPage); index++) {
    pageNumber.push(index);
  }

  return (
    <nav className={s.navegar}>
      <ul className={s.paginado}>
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number} id={s.list}>
              <button id={s.boton}>
                <a href onClick={() => paginado(number)}> {number} </a>
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
