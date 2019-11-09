"use strict";

var fs = require("fs");
var path = require("path");

var Empleado = require("../models/empleado");

function crearEmpleado(req, res) {
  var empleado = new Empleado();
  var params = req.body;

  empleado.nombre = params.nombre;
  empleado.apellido = params.apellido;
  empleado.cedula = params.cedula;
  empleado.password = params.password;
  empleado.edad = params.edad;
  empleado.empresa = params.empresa;
  empleado.fechaIngreso = params.ingreso;
  empleado.salario = params.salario;
  empleado.cargo = params.cargo;
  empleado.afiliacionPensiones = params.afiliacionPensiones;
  empleado.afiliacionCesantias = params.afiliacionCesantias;

  empleado.save((error, empleadoCreado) => {
    if (error) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!usuarioCreado) {
        res.status(200).send({ message: "No se ha guardado el usuario" });
      } else {
        res.status(200).send({
          empleado: empleadoCreado
        });
      }
    }
  });
}

function loginEmpleado(req, res) {
  var params = req.body;

  var cedula = params.cedula;
  var password = params.password;

  Empleado.findOne({ cedula: cedula.toLowerCase() }, (err, empleado) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!usuario) {
        res
          .status(200)
          .send({ message: "El usuario con esta cédula no existe" });
      } else {
        if (usuario.password != password) {
          res.status(200).send({ message: "Contraseña incorrecta" });
        } else {
          res.status(200).send({ empleado: empleado });
        }
      }
    }
  });
}

module.exports = {
  crearEmpleado,
  loginEmpleado
};
