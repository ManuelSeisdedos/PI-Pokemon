import axios from "axios";
const LOCAL = process.env.URL_BACK || "pi-pokemon-back.vercel.app";

export function filterForType(pokemons, type, allPokemons) {
  return type === "all"
    ? allPokemons
    : pokemons.filter((pokemon) => pokemon.type.includes(type) === true);
}

export function filterForNameOrId(allPokemons, name) {
  const filtradoPorId = allPokemons.filter((poke) => poke.id === Number(name));
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
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

const ordenedAlfDesc = (pokemonOrdenar) =>
  pokemonOrdenar.sort((a, b) => {
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
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
  return await axios.post(`${LOCAL}pokemons`, payload);
};

export const getTypesPokemon = async () => {
  return await axios.get(`${LOCAL}types`);
};

export const getDetailPoke = async (id) => {
  const poke = await axios.get(`${LOCAL}pokemons/${id}`);

  return poke;
};
