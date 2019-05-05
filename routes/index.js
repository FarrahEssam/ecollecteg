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
    var sql = "ENTER YOUR QUERY HERE";
   // mysqlm.execute(sql);
    res.send("done");
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'E-collect' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'E-collect' });
});

router.get('/view', function(req, res, next) {
    res.render('viewData', { title: 'E-collect' , individualInfo: 'array here', companyInfo:'array here'});
});
module.exports = router;
