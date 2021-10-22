var express = require('express');
var router = express.Router();
var pool = require('../models/bd');



router.get('/', function(req, res, next) {
  pool.query("select * from usuarios").then(function(resultados){
    console.log(resultados);
  })
  res.render('index');
});

module.exports = router;
