import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePoke, getPokemonDetail } from "../store/actions";
import s from "./SinglePokemon.module.css";

export function SinglePokemon({ match }) {
  const pokeDetail = useSelector((state) => state.pokeDetail);
  const propiedades = match.params.id;
  console.log("pokedetail -> ", pokeDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(propiedades));
    return dispatch(deletePoke());
  }, [dispatch]);
  console.log(propiedades);

  return (
    <div>
      {pokeDetail.stats?.vida && (
        <div className={s.container}>
          <div id={s.img}>
            <img src={pokeDetail.image} alt="" />
          </div>

          <div>
            <div className={s.nametipe}>
              <h1>{pokeDetail.name}</h1>
              <h1>{pokeDetail.id}</h1>
            </div>
            <h3 id={s.types}>{pokeDetail.type.map((e) => e + " ")}</h3>
            <div id={s.stats}>
              <ol>Health Points: {pokeDetail.stats.vida}</ol>
              <ol>Attack: {pokeDetail.stats.attack}</ol>
              <ol>Defense: {pokeDetail.stats.defense}</ol>
              <ol>Speed: {pokeDetail.stats.speed}</ol>
              <ol>Heigth: {pokeDetail.height}</ol>
              <ol>Weigth: {pokeDetail.weight} </ol>
            </div>
          </div>
        </div>
      )}
      <div>
        <Link to="/home">
          <button id={s.button}>Back</button>
        </Link>
      </div>
    </div>
  );
}
