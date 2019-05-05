var express = require('express');
var router = express.Router();
const mysqlm = require('../mysql/mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-collect' });
});

router.get('/request', function(req, res, next) {
  res.render('request', { title: 'E-collect' });
});

router.post('/request', function(req, res, next) {
    console.log(req.body);
    var sql = "INSERT INTO customers (name, address) VALUES ('andrew','andrew')";
   // mysqlm.addTable(sql);

    res.send("done");
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'E-collect' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'E-collect' });
});

module.exports = router;
