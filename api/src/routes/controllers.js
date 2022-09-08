const { Pokemon, Type } = require("../db");
const axios = require("axios");
const getPokesApi = async () => {
  const resultado = [];
  for (let i = 1; i <= 40; i++) {
    const result = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) =>
        resultado.push({
          name: res.data.name,
          image: res.data.sprites.other["official-artwork"].front_default,
          type: res.data.types.map((e) => e.type.name),
        })
      );
  }
  console.log(resultado);
  return resultado;
};

const getDbPokes = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["tipo"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokes = async () => {
  const apiInfo = await getPokesApi();
  const dbInfo = await getDbPokes();

  const allPokes = apiInfo.concat(dbInfo);

  return allPokes;
};

const getPokeById = async (id) => {
  const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const idPoke = {
    name: poke.data.name,
    image: poke.data.sprites.other["official-artwork"].front_default,
    type: poke.data.types.map((e) => e.type.name),
    stats: [
      (vida = poke.data.stats[0].base_stat),
      (attack = poke.data.stats[1].base_stat),
      (defense = poke.data.stats[2].base_stat),
      (speed = poke.data.stats[5].base_stat),
    ],
    weight: poke.data.weight,
    height: poke.data.height,
  };
  console.log(idPoke);
  //   const pokemon = Pokemon.findByPk(id);
  return idPoke;
};

module.exports = { getAllPokes, getPokeById };
