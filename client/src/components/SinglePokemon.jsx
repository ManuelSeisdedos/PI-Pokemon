import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePoke, getPokemonDetail } from "../store/actions";
import pokeImage from "../images/unknown.png.png";
import s from "./SinglePokemon.module.css";

export function SinglePokemon({ match }) {
  const pokeDetail = useSelector((state) => state.pokeDetail);
  const propiedades = match.params.id;
  console.log("pokedetail -> ", pokeDetail);

  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(propiedades));
    return dispatch(deletePoke());
  }, [propiedades, dispatch]);

  return (
    <div className={s.back}>
      {pokeDetail.stats?.vida && (
        <div className={s.container}>
          <div id={s.img}>
            {pokeDetail.image ? (
              <img src={pokeDetail.image} alt="" />
            ) : (
              <img src={pokeImage} alt="" />
            )}
          </div>

          <div className={s.stats}>
            <div className={s.nametipe}>
              <h1 className={s.h1}>{pokeDetail.name}</h1>
              <h1 className={s.id}>{propiedades}</h1>
            </div>
            <div id={s.types}>
              {pokeDetail.type.map((e) => (
                <h3 key={e.index}>{e + " "}</h3>
              ))}
            </div>
            <div id={s.stats}>
              <ol>• Health Points: {pokeDetail.stats.vida}</ol>
              <ol>• Attack: {pokeDetail.stats.attack}</ol>
              <ol>• Defense: {pokeDetail.stats.defense}</ol>
              <ol>• Speed: {pokeDetail.stats.speed}</ol>
              <ol>• Heigth: {pokeDetail.height}</ol>
              <ol>• Weigth: {pokeDetail.weight} </ol>
            </div>
          </div>
        </div>
      )}
      <div className={s.boton}>
        <Link to="/home">
          <button id={s.button}>Back</button>
        </Link>
      </div>
    </div>
  );
}
