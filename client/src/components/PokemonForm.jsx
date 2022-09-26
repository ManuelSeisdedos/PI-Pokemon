import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postPokemon } from "../store/actions";
import s from "./PokemonForm.module.css";
export function PokemonForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  //
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    type: [],
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      type: [...input.type, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon Creado");
    setInput({
      name: "",
      image: "",
      type: [],
      vida: "",
      ataque: "",
      defensa: "",
      velocidad: "",
      altura: "",
      peso: "",
    });

    history.push("/home");
  };

  const handleDelete = (type) => {
    console.log("type delete ->", type);
    setInput({
      ...input,
      type: input.type.filter((el) => el !== type),
    });
  };

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "A pokemon name is required";
    } else if (input.name.length > 15) {
      errors.name = "The pokemon name is too long";
    } else if (typeof input.name !== "string") {
      errors.name = "Pokemon name mistake";
    }
    return errors;
  }

  return (
    <div className={s.back}>
      <Link to="/home">
        <button className={s.home}>Home</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={s.label}>Name: </label>
          <input
            type="text"
            placeholder="*"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            maxLength="15"
            id={s.pad}
          />
          {errors.name && <p className={s.error}>{errors.name}</p>}
        </div>
        <div>
          <label className={s.label}>Health Points: </label>
          <input
            type="number"
            value={input.vida}
            name="vida"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.vida && <p className="error">{errors.vida}</p>}

          <label className={s.label}>Attack: </label>
          <input
            type="number"
            value={input.ataque}
            name="ataque"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.ataque && <p className="error">{errors.ataque}</p>}
        </div>
        <div>
          <label className={s.label}>Defense: </label>
          <input
            type="number"
            value={input.defensa}
            name="defensa"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.defensa && <p className="error">{errors.defensa}</p>}
        </div>
        <div>
          <label className={s.label}>Speed: </label>
          <input
            type="number"
            value={input.velocidad}
            name="velocidad"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.velocidad && <p className="error">{errors.velocidad}</p>}
        </div>
        <div>
          <label className={s.label}>Height: </label>
          <input
            type="number"
            value={input.altura}
            name="altura"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.altura && <p className="error">{errors.altura}</p>}
        </div>
        <div>
          <label className={s.label}>Weight: </label>
          <input
            type="number"
            value={input.peso}
            name="peso"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
          {errors.peso && <p className="error">{errors.peso}</p>}
        </div>
        <div>
          <label className={s.label}>Image: </label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
            id={s.pad}
          />
        </div>
        <div>
          <label className={s.label}>Type: </label>
          <select onChange={(e) => handleSelect(e)} id={s.types}>
            <option value="all">All</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select>
        </div>
        <button type="submit" className={s.create}>
          {" "}
          Create Pokemon
        </button>
      </form>
      <div className={s.form}>
        {input.type.map((el) => (
          <div className={s.tipo}>
            <button
              type="onClick"
              onClick={() => handleDelete(el)}
              className={s.btnx}
            >
              x
            </button>
            <p key={el.id}>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
