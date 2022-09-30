import React, { useState } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./Delete.module.css";

export default function Delete() {
  const [pokemon, setPokemon] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch();
    setPokemon("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deletePokemon(pokemon));
    setPokemon("");
  };

  return (
    <div className={s.back}>
      <div className={s.home}>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search Pokemon"
            value={""}
            onChange={handleChange}
          />
          <button id={s.boton}>FIND </button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
