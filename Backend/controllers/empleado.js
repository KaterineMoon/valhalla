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
  empleado.cargo = params.cargo;
  empleado.salario = params.salario;
  empleado.afiliacionPensiones = params.afiliacionPensiones;
  empleado.saldoPensiones = params.saldoPensiones;
  empleado.afiliacionCesantias = params.afiliacionCesantias;
  empleado.saldoCesantias = params.saldoCesantias;
  empleado.role = "ROLE_PERS";

  empleado.save((error, empleadoCreado) => {
    if (error) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empleadoCreado) {
        res.status(400).send({ message: "No se ha guardado el usuario" });
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

  Empleado.findOne({ cedula }, (err, empleado) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empleado) {
        res
          .status(400)
          .send({ message: "El usuario con esta cédula no existe" });
      } else {
        if (empleado.password != password) {
          res.status(400).send({ message: "Contraseña incorrecta" });
        } else {
          res.status(200).send({ empleado: empleado });
        }
      }
    }
  });
}

function actualizarPersona(req, res) {
  var idPersona = req.params.id;
  var params = req.body;
  Empleado.findByIdAndUpdate(idPersona, params, (err, empleadoActualizado) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empleadoActualizado) {
        res.status(400).send({ message: "No se puede actualizar el usuario" });
      } else {
        res.status(200).send({ empleado: empleadoActualizado });
      }
    }
  });
}

function afiliar(req, res) {
  var empleado = new Empleado();
  var params = req.body;

  empleado.cedula = params.cedula;
  empleado.celular = params.celular;
  empleado.correo = params.correo;
  
  empleado.save((error, afiliacionCorrecta) => {
    if (error) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empleadoCreado) {
        res.status(400).send({ message: "No se ha guardado el usuario" });
      } else {
        res.status(200).send({
          empleado: afiliacionCorrecta
        });
      }
    }
  });
}
module.exports = {
  crearEmpleado,
  loginEmpleado,
  actualizarPersona,
  afiliar
};
