import { Link } from "react-router-dom";
import pokemon from "../images/pngegg.png";
import { Filtrado } from "./Filtrado";
import SearchBar from "./SearchBar";
import s from "./NavBar.module.css";
export function NavBar() {
  return (
    <div className={s.nav}>
      <div id={s.divimg}>
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
          <button className={s.create}> CREATE POKEMON</button>
        </Link>
      </div>
      
    </div>
  );
}
