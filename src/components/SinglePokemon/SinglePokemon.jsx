import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePoke, getPokemonDetail } from "../../store/actions";
import pokeImage from "../../images/unknown.png.png";
import s from "./SinglePokemon.module.css";
import { GoHeart } from "react-icons/go";
import {
  GiFist,
  GiShieldEchoes,
  GiWalkingBoot,
  GiWeight,
  GiBodyHeight,
} from "react-icons/gi";

export function SinglePokemon({ match }) {
  const pokeDetail = useSelector((state) => state.pokeDetail);
  const propiedades = match.params.id;

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
              <h1 className={s.h1}>{pokeDetail.name.toUpperCase()}</h1>
              <h1 className={s.id}>{propiedades.slice(0, 7)}</h1>
            </div>
            <div id={s.types}>
              {pokeDetail.type.map((e) => (
                <h3 key={e.index}>{e.toUpperCase() + " "}</h3>
              ))}
            </div>
            <div id={s.stats}>
              <ol>
                <GoHeart /> Health Points: {pokeDetail.stats.vida}
              </ol>
              <ol>
                <GiFist /> Attack: {pokeDetail.stats.attack}
              </ol>
              <ol>
                <GiShieldEchoes /> Defense: {pokeDetail.stats.defense}
              </ol>
              <ol>
                <GiWalkingBoot /> Speed: {pokeDetail.stats.speed}
              </ol>
              <ol>
                <GiBodyHeight /> Heigth: {pokeDetail.height}
              </ol>
              <ol>
                <GiWeight /> Weigth: {pokeDetail.weight}{" "}
              </ol>
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
