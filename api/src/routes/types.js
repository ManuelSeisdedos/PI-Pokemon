const { Router } = require("express");
const { Type } = require("../db");
const { getTypesPokeApi } = require("./controllers");


const router = Router();

router.get("/", async (req, res, next) => {
  const types = await getTypesPokeApi();

  return res.status(200).json(types);
});

module.exports = router;
