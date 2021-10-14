var express = require('express');
var router = express.Router();
var pool = require('./bd');
/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query("select * from empleados").then(function(resultados){
    console.log(resultados);
  })
  res.render('index');
});

module.exports = router;
