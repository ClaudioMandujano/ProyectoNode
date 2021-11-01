var express = require('express');
var router = express.Router();
var pool = require('../models/bd');
var novedadesModel = require('../models/novedadesModel');


router.get('/', async function(req, res, next){
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  res.render('index',{
    novedades
  });
});


router.get('/', function(req, res, next) {
  pool.query("select * from usuarios").then(function(resultados){
    console.log(resultados);
  })
  res.render('index');
});

module.exports = router;
