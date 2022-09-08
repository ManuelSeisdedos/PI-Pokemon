const { Router } = require("express");
const { Type } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res, next) => {
  const types = await Type.findAll();

  res.json(types);
});

module.exports = router;
