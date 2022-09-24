import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, filterPokemonByType } from "../store/actions";
import PokemonCard from "./PokemonCard.jsx";
import Paginado from "./Paginado";
import { Link } from "react-router-dom";
import s from "./Home.module.css"

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons); // TRAE TODO LO QUE ESTA EN EL ESTADO DE POKEMONS
  const allPokemons = useSelector((state) => state.allPokemons);
  console.log("POKEMONS", pokemons);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  //const [currentPokemons, setCurrentPokemons] = useState([]);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  // useEffect(() => {
  //   setCurrentPokemons(pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon));
  //   console.log("asd -> ", currentPokemons);
  // }, [pokemons]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons())

  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }
 
  return (
    <div className={s.all}>
      <div className={s.cards}>
        {currentPokemons.length >= 1 &&
          currentPokemons.map((p, index) => (
            

            <PokemonCard
              name={p.name}
              image={p.image}
              types={p.type}
              key={`pokemon-${index}`}
              id={p.id}
            />
            
          ))}
      </div>
      <div >
      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        pokemons={allPokemons.length}
        paginado={paginado}
      />
      </div>
      <div className={s.space}>
      <button onClick={(e) => handleClick(e)} className={s.button}s> GET POKES </button>
      </div>
    </div>
  );
}
