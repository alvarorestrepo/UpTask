const express = require("express");
const routes = require("./routes");
const path = require("path");

const bodyParser = require("body-parser");

//Crear la conexion a la DB
const db = require("./config/db");

//importar el modelo
require("./models/Proyectos");

db.sync()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) => console.log(error));

//crear una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static("public"));

//Habilitar Pug
app.set("view engine", "pug");

//Agregar la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(3000);
