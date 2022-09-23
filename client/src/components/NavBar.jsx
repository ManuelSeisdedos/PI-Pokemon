import { Link } from "react-router-dom";
import pokemon from "../images/POKEMON2.png";
import { Filtrado } from "./Filtrado";
import SearchBar from "./SearchBar";
import s from "./NavBar.module.css";
export function NavBar() {
  return (
    <div className={s.nav}>
      <div>
        <img src={pokemon} alt="" id={s.img} />
      </div>
      <div id={s.search}>
        <SearchBar />
      </div>
      <div id={s.filter}>
        <Filtrado />
      </div>
      <div id={s.button}>
        <Link to="/create">
          <button> Create Pokemon</button>
        </Link>
      </div>
    </div>
  );
}
