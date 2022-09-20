import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function PokemonCard({ name, image, types, id }) {
  name = name.charAt(0).toUpperCase().concat(name.slice(1));

  return (
    <div>
      <img src={image} alt="" />
      <Link to={"/pokemon/" + id}>
        <div>
          <h3> {name} </h3>
        </div>
      </Link>
      {types.map((e, index) => (
        <h3 key={`type-${index}`}>{e}</h3>
      ))}
    </div>
  );
}
