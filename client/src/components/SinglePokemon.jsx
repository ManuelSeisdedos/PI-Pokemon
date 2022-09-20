import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePoke, getPokemonDetail } from "../store/actions";

export function SinglePokemon({ match }) {
  const pokeDetail = useSelector((state) => state.pokeDetail);
  const propiedades = match.params.id;
  console.log(pokeDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(propiedades));
    return dispatch(deletePoke());
  }, [dispatch]);
  console.log(propiedades);

  return (
    <div>
      {pokeDetail.stats?.vida && (
        <div>
          <img src={pokeDetail.image} alt="" />
          <h1>{pokeDetail.name}</h1>
          <h3>{pokeDetail.type.map((e) => e + " ")}</h3>
          <h3>{pokeDetail.id}</h3>
          <li>
            <ol>HP: {pokeDetail.stats.vida}</ol>
            <ol>attack: {pokeDetail.stats.attack}</ol>
            <ol>defense: {pokeDetail.stats.defense}</ol>
            <ol>speed: {pokeDetail.stats.speed}</ol>
            <ol>height: {pokeDetail.height}</ol>
            <ol>weight: {pokeDetail.weight} </ol>
          </li>
        </div>
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}
