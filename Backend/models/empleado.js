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
  fechaIngreso: Date, //Para insertar datepicker en el front: https://es.stackoverflow.com/questions/99799/datepicker-en-bootstrap
  salario: String,
  cargo: String,
  afiliacionPensiones: String,
  afiliacionCesantias: String
});

module.exports = mongoose.model("empleado", EmpleadoSchema);
