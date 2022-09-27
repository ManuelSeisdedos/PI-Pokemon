import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredByName } from "../../store/actions/index";
import s from "./Searchbar.module.css";
const SearchBar = () => {
  const [pokemon, setPokemon] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setPokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filteredByName(pokemon));
    setPokemon("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.formulario}>
      <input
        type="search"
        placeholder="Search Pokemon"
        value={pokemon}
        onChange={handleChange}
        id={s.buton}
      />
      <button id={s.boton}>FIND </button>
    </form>
  );
};

export default SearchBar;
