import axios from "axios";

export function filterForType(allPokemons, type) {
  return type === "all"
    ? allPokemons
    : allPokemons.filter((pokemon) => pokemon.type.includes(type) === true);
}

export function filterForNameOrId(allPokemons, name) {
  const filtradoPorId = allPokemons.filter((poke) => poke.id == name);
  const filtradoPorNombre = allPokemons.filter(
    (poke) => poke.name.toLowerCase() === name.toLowerCase()
  );
  const pokeFiltrado = filtradoPorId.concat(filtradoPorNombre);
  return pokeFiltrado ? pokeFiltrado : [];
}

export function filterForCreated(allPokemons, payload) {
  const filtradoPorExistente = allPokemons.filter(
    (poke) => poke.created === false
  );
  const filtradoPorCreado = allPokemons.filter(
    (poke) => poke.created === "true"
  );

  if (payload === "all") {
    return allPokemons;
  } else if (payload === "pokemonexistente") {
    return filtradoPorExistente;
  } else if (payload === "pokemoncreado") {
    return filtradoPorCreado;
  }

  return [];
}

const ordenedAlfAsc = (pokemonOrdenar) =>
  pokemonOrdenar.sort((a, b) => {
    // a.name = a.name.toLowerCase();
    // b.name = b.name.toLowerCase();
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });

const ordenedAlfDesc = (pokemonOrdenar) =>
  pokemonOrdenar.sort((a, b) => {
    a.name = a.name;
    b.name = b.name;
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });

export const filterForAlf = (allPokemons, order) => {
  const pokemonOrdenar = [...allPokemons];

  return order === "asc"
    ? ordenedAlfAsc(pokemonOrdenar)
    : ordenedAlfDesc(pokemonOrdenar);
};

const filtradoPorAtaqueAscendente = (pokemonOrdenar) => {
  const pokemonOrdenados = pokemonOrdenar.sort((a, b) => {
    if (a.attack < b.attack) {
      return 1;
    }
    if (a.attack > b.attack) {
      return -1;
    }
    return 0;
  });
  console.log("POKEMON ORDENADOS", pokemonOrdenados);
  return pokemonOrdenados;
};

const filtradoPorAtaqueDescendente = (pokemonOrdenar) => {
  const pokemonOrdenados = pokemonOrdenar.sort((a, b) => {
    a = a.attack;
    b = b.attack;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  return pokemonOrdenados;
};

export const filterForAtk = (allPokemons, payload) => {
  const pokemonOrdenar = [...allPokemons];
  console.log(payload);
  return payload === "attackasc"
    ? filtradoPorAtaqueAscendente(pokemonOrdenar)
    : filtradoPorAtaqueDescendente(pokemonOrdenar);
};

export const newPokemon = async (allPokemons, payload) => {
  const { name, image, type, vida, ataque, defensa, velocidad, altura, peso } =
    payload;

  return await axios.post("http://localhost:3001/pokemons", payload);
};

// export const pokemonDetail = async (id) => {
//   try {
//     await axios.get(`http://localhost:3001/pokemons/${id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };
