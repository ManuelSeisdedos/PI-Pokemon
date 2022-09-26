const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const { getAllPokes, getPokeById } = require("./controllers");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const pokes = await getAllPokes();
  if (name) {
    const pokemons = pokes.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );
    pokemons
      ? res.status(200).json(pokemons)
      : res.status(404).send("No existe el pokemon");
  } else {
    res.status(200).json(pokes);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  const poke = await getPokeById(idPokemon);
  console.log("POKEEEEEEEEEEE", poke);
  return res.status(200).json(poke);
});

router.post("/", async (req, res, next) => {
  const {
    id,
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    type,
    image,
  } = req.body;
  const result = [];
  type.map((e) => result.push(e));

  const newPokemon = await Pokemon.create({
    id,
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    image,
  });
  const resultado = result.map((e) =>
    Type.findOne({
      where: { tipo: e },
    })
  );

  const tiposResueltos = await Promise.all(resultado);

  if (tiposResueltos) {
    const promesa = tiposResueltos.map((e) => newPokemon.addType(e));
    await Promise.all(promesa);
  }

  res.json(newPokemon);
});

module.exports = router;
