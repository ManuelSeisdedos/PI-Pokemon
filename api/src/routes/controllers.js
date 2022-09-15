const { Pokemon, Type } = require("../db");
const axios = require("axios");


const getPokesApi = async () => {
  const allPokes = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );
  const allUrl = allPokes.data.results.map((e) => axios.get(e.url));
  const promesas = await Promise.all(allUrl);
  const resultado = [];
  promesas.map((e) =>
    resultado.push({
      name: e.data.name,
      image: e.data.sprites.other["official-artwork"].front_default,
      type: e.data.types.map((e) => e.type.name),
    })
  );

  return resultado;
};

const getDbPokes = async () => {
  const result = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["tipo"],
      through: {
        attributes: [],
      },
    },
  });
  const resultado = [];
  const allPokesDb = result.map((e) =>
    resultado.push({
      name: e.name,
      image: e.image,
      type: e.type,
    })
  );
  return resultado;
};

const getAllPokes = async () => {
  const apiInfo = await getPokesApi();
  const dbInfo = await getDbPokes();

  const allPokes = apiInfo.concat(dbInfo);

  return allPokes;
};

const getPokeIdApi = async (id) => {
  try {
    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const idPoke = {
      name: poke.data.name,
      image: poke.data.sprites.other["official-artwork"].front_default,
      type: poke.data.types.map((e) => e.type.name),
      stats: {
        vida: poke.data.stats[0].base_stat,
        attack: poke.data.stats[1].base_stat,
        defense: poke.data.stats[2].base_stat,
        speed: poke.data.stats[5].base_stat,
      },
      weight: poke.data.weight,
      height: poke.data.height,
    };

    return idPoke;
  } catch (error) {
    return error.message;
  }
};

const getPokeByIdDb = async (id) => {
  try {
    const pokemon = await Pokemon.findByPk(id);

    if (pokemon) return pokemon.dataValues;
    return "No existe un pokemon con este id.";
  } catch (error) {
    return error.message;
  }
};

const getPokeById = async (id) => {
  const idParam = id;
  if (idParam.includes("-")) {
    const poke = await getPokeByIdDb(id);
    if (poke) return poke;
    else return "No existe un pokemon con este id";
  } else {
    const poke = await getPokeIdApi(id);
    if (poke) return poke;
    else return "No existe un pokemon con este id";
  }
};

const getTypesPokeApi = async () => {
  const result = [];
  const types = await axios.get("https://pokeapi.co/api/v2/type");
  console.log(types.data.results[0]);
  const tipos = types.data.results.map((e) =>
    result.push({
      tipo: e.name,
    })
  );
  console.log(result);
  await Type.bulkCreate(result);
  const pokeType = await Type.findAll();
  return pokeType;
};

module.exports = { getAllPokes, getPokeById, getTypesPokeApi };
