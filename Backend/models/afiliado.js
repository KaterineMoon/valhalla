"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AfiliadoSchema = Schema({
  cedula: Number,
  celular: Number,
  correo: String,
});

module.exports = mongoose.model("afiliado", AfiliadoSchema);
