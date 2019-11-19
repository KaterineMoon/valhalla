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

    console.log(afiliado)
    
    afiliado.save((error, afiliacionCorrecta) => {
      if (error) {
        res.status(500).send({ message: "Error en el servidor" });
        console.log(error)
      } else {
        if (!afiliacionCorrecta) {
          res.status(400).send({ message: "No se ha guardado la solicitud de afiliación" });
          console.log(afiliacionCorrecta)
        } else {
          res.status(200).send({
            afiliado: afiliacionCorrecta
          });
          console.log(afiliado)
        }
      }
    });
  }

  module.exports = {
      afiliar
  }