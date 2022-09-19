import { useState } from "react";
import {
  filterPokemonByType,
  filterByCreated,
  filteredByAlf,
} from "../store/actions";
import { useDispatch } from "react-redux";

export function Filtrado() {
  const dispatch = useDispatch();
  function handleFilteredStatus(e) {
    dispatch(filterPokemonByType(e.target.value));
  }

  function handleFilteredExt(e) {
    dispatch(filterByCreated(e.target.value));
  }

  function handleFilteredAlf(e) {
    dispatch(filteredByAlf(e.target.value));
  }
  return (
    <div>
      <div>
        <select onChange={(e) => handleFilteredExt(e)}>
          <option value="all">Native</option>
          <option value="pokemonexistente">Native Pokemon</option>
          <option value="pokemoncreado">Created Pokemon</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilteredAlf(e)}>
          <option value="all">Sort Alphabetically</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>

      <div>
        <select>
          <option value="all">Sort by Attack</option>
          <option value="attackasc">Ataque Ascendente</option>
          <option value="attackdesc">Ataque Descendente</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilteredStatus(e)}>
          <option value="all">All</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
        </select>
      </div>
    </div>
  );
}
