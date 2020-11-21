const express = require("express");
const router = express.Router();

//importar los controladores
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  //Ruta para el Home
  router.get("/", proyectosController.proyectosHome);
  router.get("/nuevo-proyecto", proyectosController.formularioProyecto);
  return router;
};
