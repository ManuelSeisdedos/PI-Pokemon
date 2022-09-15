import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOnePoke } from "../store/actions";

export function SinglePokemon(name) {
  const poke = useSelector((state) => state.filteredPokes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePoke());
  }, []);
  console.log(poke);

  return (
    <div>
      <img src={poke.image} alt="" />
      <h1>{poke.name}</h1>
      <h3>{poke.type}</h3>
      <h3>{poke.id}</h3>
      <li>
        <ol>HP: {poke.hp}</ol>
        <ol>attack: {poke.attack}</ol>
        <ol>defense: {poke.defense}</ol>
        <ol>speed: {poke.velocidad}</ol>
        <ol>height: {poke.height}</ol>
        <ol>weight: {poke.weight} </ol>
      </li>
    </div>
  );
}

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPokemons } from "../store/actions";
// import PokemonCard from "./PokemonCard";

// export default function Home() {
//   return (
//     <div>
//       <h4>Soy MAMUELON</h4>
//       {pokemons.length >= 1 &&
//         pokemons.map((p) => (
//           <PokemonCard name={p.name} image={p.image} types={p.type} />
//         ))}
//       <button onClick={() => dispatch(getPokemons())}> GET POKES </button>
//     </div>
//   );
// }
