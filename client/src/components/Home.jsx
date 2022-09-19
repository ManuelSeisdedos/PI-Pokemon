import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, filterPokemonByType } from "../store/actions";
import PokemonCard from "./PokemonCard";
import Paginado from "./Paginado";

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons); // TRAE TODO LO QUE ESTA EN EL ESTADO DE POKEMONS
  // console.log(pokemons);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  // const currentPokemons = pokemons.slice(
  //   indexOfFirstPokemon,
  //   indexOfLastPokemon
  // );
  useEffect(() => {
    setCurrentPokemons(pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon));
    console.log("asd -> ", currentPokemons);
  }, [pokemons]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  return (
    <div>
      {currentPokemons.length >= 1 &&
        currentPokemons.map((p, index) => (
          <PokemonCard
            name={p.name}
            image={p.image}
            types={p.type}
            key={`pokemon-${index}`}
          />
        ))}
      <button onClick={(e) => handleClick(e)}> GET POKES </button>
      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        pokemons={currentPokemons.length}
        paginado={paginado}
      />
    </div>
  );
}
