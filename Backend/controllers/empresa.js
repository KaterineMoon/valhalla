"use strict";

var fs = require("fs");
var path = require("path");

var Empresa = require("../models/empresa");

function crearEmpresa(req, res) {
  var empresa = new Empresa();
  var params = req.body;

  empresa.razonSocial = params.razonSocial;
  empresa.nit = params.nit;
  empresa.password = params.password;
  empresa.role = "ROLE_EMP";

  empresa.save((error, empresaCreada) => {
    if (error) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empresaCreada) {
        res.status(400).send({ message: "No se ha guardado la empresa" });
      } else {
        res.status(200).send({
          empresa: empresaCreada
        });
      }
    }
  });
}

function loginEmpresa(req, res) {
  var params = req.body;

  var nit = params.nit;
  var password = params.password;

  Empresa.findOne({ nit: nit.toLowerCase() }, (err, empresa) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!empresa) {
        res
          .status(400)
          .send({ message: "Este NIT no existe en la base de datos" });
      } else {
        if (empresa.password != password) {
          res.status(400).send({ message: "Contraseña incorrecta" });
        } else {
          res.status(200).send({ empresa: empresa });
        }
      }
    }
  });
}

function actualizarEmpresa(req, res){
  var idEmpresa = req.params.id;
  var params = req.body;
  Empresa.findByIdAndUpdate(idEmpresa, params, (err, empresaActualizada) => {
    if(err) {
      res.status(500).send({ message : "Error en el servidor"})
    } else {
      if(!empresaActualizada) {
        res.status(400).send({ message: "No se puede actualizar la empresa"})
      } else{
        res.status(200).send({ empresa: empresaActualizada})
      }
    }
  })
}


module.exports = {
  crearEmpresa,
  loginEmpresa,
  actualizarEmpresa
};
