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
  salario: Number,
  cargo: String,
  afiliacionPensiones: String,
  saldoPensiones: Number,
  afiliacionCesantias: String,
  saldoCesantias: Number,
  role: String
});

module.exports = mongoose.model("empleado", EmpleadoSchema);
