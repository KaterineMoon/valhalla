"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmpleadoSchema = Schema({
  nombre: String,
  apellido: String,
  cedula: Number,
  password: String,
  edad: Number,
  empresa: String,
  fechaIngreso: Date,
  cargo: String,
  salario: String,
  afiliacionPensiones: String,
  saldoPensiones: Number,
  afiliacionCesantias: String,
  saldoCesantías: Number,
  role: String
});

module.exports = mongoose.model("empleado", EmpleadoSchema);
