import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredByName } from "../store/actions/index";

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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search Pokemon"
        value={pokemon}
        onChange={handleChange}
      />
      <button>Buscar </button>
    </form>
  );
};

export default SearchBar;
