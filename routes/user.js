var express = require('express');
var mysql = require('mysql');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-collect' });
});

module.exports = router;
