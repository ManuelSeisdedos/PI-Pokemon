import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../store/actions";
import PokemonCard from "./PokemonCard";

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons); // TRAE TODO LO QUE ESTA EN EL ESTADO DE POKEMONS
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  return (
    <div>
      <h4>Soy MAMUELON</h4>
      {pokemons.length >= 1 &&
        pokemons.map((p) => (
          <PokemonCard name={p.name} image={p.image} types={p.type} />
        ))}
      <button onClick={(e) => handleClick(e)}> GET POKES </button>
    </div>
  );
}

//BOTONES PARA FILTRADO Y ORDENAMIENTO

<select>
  <options value="asc">A to Z</options>
  <options value="desc">Z to A</options>
</select>;

<select>
  <options value="pokex">Pokemon Existente</options>
  <options value="pokec">Pokemon Creado</options>
</select>;

<select>
  <options value="attackasc">Ataque Ascendente</options>
  <options value="attackdesc">Ataque Descendente</options>
</select>;

<select>
  <options value="Normal">Normal</options>
  <options value="Fighting">Fighting</options>
  <options value="Flying">Flying</options>
  <options value="Poison">Poison</options>
  <options value="Ground">Ground</options>
  <options value="Rock">Rock</options>
  <options value="Bug">Bug</options>
  <options value="Ghost">Ghost</options>
  <options value="Steel">Steel</options>
  <options value="Fire">Fire</options>
  <options value="Water">Water</options>
  <options value="Grass">Grass</options>
  <options value="Electric">Electric</options>
  <options value="Psychic">Psychic</options>
  <options value="Ice">Ice</options>
  <options value="Dragon">Dragon</options>
  <options value="Dark">Dark</options>
  <options value="Fairy">Fairy</options>
  <options value="Unknown">Unknown</options>
  <options value="Shadow">Shadow</options>
</select>;
