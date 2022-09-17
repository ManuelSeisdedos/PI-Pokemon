import pokemon from "../images/POKEMON2.png";
import { Filtrado } from "./Filtrado";
import SearchBar from "./SearchBar";

export function NavBar() {
  return (
    <div>
      <img src={pokemon} alt="" />
      <SearchBar />
      <Filtrado />
    </div>
  );
}
