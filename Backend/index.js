"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3977;

mongoose.connect("mongodb://localhost:27017/valhalla", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Conexión a base de datos exitosa");
    app.listen(port, () => {
      console.log("Servidor esuchando en el puerto " + port);
    });
  }
});
