"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var empleado_routes = require("./routes/empleado");
var empresa_routes = require("./routes/empresa");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar cabeceras http, son los headers que vamos a devolver cuando nos hagan una solicitud
// app.use((req, res, next) => {
//   //Permitir acceso a nuestra api desde todos los dominios
//   res.header("Access-Control-Allow-Origin", "*");

//   //Cabeceras neesarias para que el api a nivel ajax funcione
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//   );

//   //Métodos más comunes
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

//   //Finaliza middleware
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

app.use("/api", empleado_routes);
app.use("/api", empresa_routes);

module.exports = app;
