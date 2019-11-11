"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmpresaSchema = Schema({
  razonSocial: String,
  nit: Number,
  password: String,
  role: String
});

module.exports = mongoose.model("empresa", EmpresaSchema);
