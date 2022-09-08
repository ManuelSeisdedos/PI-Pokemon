const { Router } = require("express");
const { Pokemon } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  const pokemons = await Pokemon.findAll();

  res.status(200).json(pokemons);
});

router.get("/:idPokemon", async (req, res, next) => {
  const { idPokemon } = req.params;
  console.log(idPokemon);
  try {
    const poke = await Pokemon.findByPk((e) => e.id === idPokemon);

    res.json(poke);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  const { id, name, vida, ataque, defensa, velocidad, altura, peso } = req.body;
  const newPokemon = await Pokemon.create({
    id,
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });

  res.json(newPokemon);
});

module.exports = router;
