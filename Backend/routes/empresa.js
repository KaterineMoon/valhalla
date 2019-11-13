"use strict";

var express = require("express");
var EmpresaController = require("../controllers/empresa");

var api = express.Router();

api.post("/empresa-login", EmpresaController.loginEmpresa);
api.post("/empresa", EmpresaController.crearEmpresa);
api.put("/empresa:id", EmpresaController.actualizarEmpresa);

module.exports = api;
