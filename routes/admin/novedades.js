var express = require('express');
var router = express.Router();


router.get('/', function ru(req, res, next){
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
        });
});

module.exports = router;