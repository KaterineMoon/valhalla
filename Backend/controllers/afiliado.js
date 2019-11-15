"use strict";

var fs = require("fs");
var path = require("path");

var Afiliado = require("../models/afiliado");

function afiliar(req, res) {
    var afiliado = new Afiliado();
    var params = req.body;
  
    afiliado.cedula = params.cedula;
    afiliado.celular = params.celular;
    afiliado.correo = params.correo;
    
    afiliado.save((error, afiliacionCorrecta) => {
      if (error) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (!afiliacionCorrecta) {
          res.status(400).send({ message: "No se ha guardado la solicitud de afiliación" });
        } else {
          res.status(200).send({
            afiliado: afiliacionCorrecta
          });
        }
      }
    });
  }

  module.exports = {
      afiliar
  }