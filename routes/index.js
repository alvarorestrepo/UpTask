const express = require("express");
const router = express.Router();

//importar express validator
const { body } = require("express-validator/check");

//importar los controladores
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  //Ruta para el Home
  router.get("/", proyectosController.proyectosHome);
  router.get("/nuevo-proyecto", proyectosController.formularioProyecto);
  router.post(
    "/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto
  );
  return router;
};
