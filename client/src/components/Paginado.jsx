import React from "react";

export default function Paginado({ pokemonsPerPage, pokemons, paginado }) {
  const pageNumber = [];

  for (let index = 1; index <= Math.ceil(pokemons / pokemonsPerPage); index++) {
    pageNumber.push(index);
  }

  return (
    <nav>
      <ul className="paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <li className="number" key={number}>
              <a onClick={() => paginado(number)}> {number} </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
