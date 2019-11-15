"use strict";

var express = require("express");
var AfiliadoController = require("../controllers/afiliado");

var api = express.Router();

api.post("/afiliado-afiliar", AfiliadoController.afiliar);

module.exports = api;