const express = require('express');
const mysql = require('mysql');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-collect' });
});

module.exports = router;
