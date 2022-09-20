import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postPokemon } from "../store/actions";

export function PokemonForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  console.log(types);
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

  function validate(input) {
    let errors = {};
    if (!input.name) {
      return (errors.name = "A pokemon name is required");
    }
    if (input.name.length > 15) {
      return (errors.name = "The pokemon name is too long");
    }
    if (typeof input.name !== "string") {
      return (errors.name = "Pokemon name mistake");
    }
    if (typeof input.vida !== "number") {
      return (errors.vida = "A number es required");
    }
    if (typeof input.ataque !== "number") {
      return (errors.ataque = "A number es required");
    }
    if (typeof input.defensa !== "number") {
      return (errors.defensa = "A number es required");
    }
    if (typeof input.velocidad !== "number") {
      return (errors.velocidad = "A number es required");
    }
    if (typeof input.altura !== "number") {
      return (errors.altura = "A number es required");
    }
    if (typeof input.peso !== "number") {
      return (errors.peso = "A number es required");
    }
    return errors;
  }
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Health Points: </label>
          <input
            type="number"
            value={input.vida}
            name="vida"
            onChange={(e) => handleChange(e)}
          />
          {errors.vida && <p className="error">{errors.vida}</p>}
        </div>
        <div>
          <label>Attack: </label>
          <input
            type="number"
            value={input.ataque}
            name="ataque"
            onChange={(e) => handleChange(e)}
          />
          {errors.ataque && <p className="error">{errors.ataque}</p>}
        </div>
        <div>
          <label>Defense: </label>
          <input
            type="number"
            value={input.defensa}
            name="defensa"
            onChange={(e) => handleChange(e)}
          />
          {errors.defensa && <p className="error">{errors.defensa}</p>}
        </div>
        <div>
          <label>Speed: </label>
          <input
            type="number"
            value={input.velocidad}
            name="velocidad"
            onChange={(e) => handleChange(e)}
          />
          {errors.velocidad && <p className="error">{errors.velocidad}</p>}
        </div>
        <div>
          <label>Height: </label>
          <input
            type="number"
            value={input.altura}
            name="altura"
            onChange={(e) => handleChange(e)}
          />
          {errors.altura && <p className="error">{errors.altura}</p>}
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="number"
            value={input.peso}
            name="peso"
            onChange={(e) => handleChange(e)}
          />
          {errors.peso && <p className="error">{errors.peso}</p>}
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Type: </label>
          <select onChange={(e) => handleSelect(e)}>
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
        <ul>
          <li>{input.type.map((e) => e + " ,")}</li>
        </ul>

        <button type="submit"> Create Pokemon</button>
      </form>
    </div>
  );
}
