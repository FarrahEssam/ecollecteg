var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-collect' });
});

router.get('/request', function(req, res, next) {
  res.render('request', { title: 'E-collect' });
});

router.post('/request', function(req, res, next) {
    console.log(req.body);
    res.send("done");
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'E-collect' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'E-collect' });
});

router.get('/newhome', function(req, res, next) {
    res.render('newhome', { title: 'E-collect' });
});
module.exports = router;
