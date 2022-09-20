import { Link } from "react-router-dom";
import pokemon from "../images/POKEMON2.png";
import { Filtrado } from "./Filtrado";
import SearchBar from "./SearchBar";

export function NavBar() {
  return (
    <div>
      <img src={pokemon} alt="" />
      <SearchBar />
      <Filtrado />
      <Link to="/create">
        <button> Create Pokemon</button>
      </Link>
    </div>
  );
}
