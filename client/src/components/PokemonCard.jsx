import { Link } from "react-router-dom";
import pokeImage from "../images/unknown.png.png";
import s from "./PokemonCard.module.css";
export default function PokemonCard({ name, image, types, id }) {
  name = name.charAt(0).toUpperCase().concat(name.slice(1));
  const tipos = types.map((e) => {
    return e.charAt(0).toUpperCase().concat(e.slice(1));
  });

  return (
    <div className={s.back}>
      {image ? (
        <img src={image} alt="" id={s.img} />
      ) : (
        <img src={pokeImage} alt="" id={s.img} />
      )}

      <div className={s.name}>
        <Link to={"/pokemon/" + id} id={s.link}>
          <h3 className={s.h3}> {name} </h3>
        </Link>
      </div>
      <div id={s.types}>
        {tipos.map((e, index) => (
          <h3 key={`type-${index}`} className={s.tipos}>
            {e}
          </h3>
        ))}
      </div>
    </div>
  );
}
