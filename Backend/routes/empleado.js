"use strict";

var express = require("express");
var EmpleadoController = require("../controllers/empleado");

var api = express.Router();

api.post("/empleado-login", EmpleadoController.loginEmpleado);
api.post("/empleado", EmpleadoController.crearEmpleado);
api.put("/empleado:id", EmpleadoController.actualizarPersona);

module.exports = api;
