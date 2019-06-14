const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const mysqlConfig = require('../mysql/mysqlConfig');

const con = mysql.createConnection({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'E-collect'});
});

router.get('/request', function (req, res, next) {
    res.render('request', {title: 'E-collect'});
});



router.post('/individualInfo', function (req, res) {
    console.log(req.body);
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Gender = req.body.Gender;
    const EWasteType = req.body.EWasteType;
    const EWasteQuantity = req.body.EWasteQuantity;
    const AgeRange = req.body.AgeRange;
    const PhoneNumber = req.body.PhoneNumber;
    const Address = req.body.Address;

    const query = "INSERT INTO Individual(FirstName, LastName, Gender, EWasteType, EWasteQuantity, AgeRange, " +
        "PhoneNumber, Address) VALUES ('" + FirstName + "', '" + LastName + "', '" + Gender + "', '" + EWasteType + "'," +
        "'" + EWasteQuantity + "', '" + AgeRange + "', '" + PhoneNumber + "', '" + Address + "');";

    con.query(query);
    res.send("done");
});

router.post('/companyInfo', function (req, res) {
    console.log(req.body);
    const CName = req.body.CName;
    const EName = req.body.EName;
    const CompanyType = req.body.CompanyType;
    const EWasteType = req.body.EWasteType;
    const EWasteQuantity = req.body.EWasteQuantity;
    const CPhoneNumber = req.body.CPhoneNumber;
    const EPhoneNumber = req.body.EPhoneNumber;
    const Address = req.body.Address;

    console.log(CName, "    ", EName);
    const query = "INSERT INTO Company(CName, EName, CompanyType, EWasteType, EWasteQuantity, CPhoneNumber, " +
        "EPhoneNumber, Address) VALUES ('" + CName + "', '" + EName + "', '" + CompanyType + "', '" + EWasteType + "'," +
        "'" + EWasteQuantity + "', '" + CPhoneNumber + "', '" + EPhoneNumber + "', '" + Address + "');";

    con.query(query);
    res.send("done");
});

router.post('/companyInfo', function (req, res, next) {
    console.log(req.body)
});

router.get('/asdferuihfuiehrgnbfdsvpqowierbxcmvdhg', function (req, res) {
    // SELECT * FROM Company;
    const query1 = "SELECT * FROM Individual;";
    const query2 = "SELECT * FROM Company;";

    con.query(query1, function (err1, results1) {
        if (err1) {
            throw err1;
        } else {
            console.log(results1);
            con.query(query2, function (err2, results2) {
                if (err2) {
                    throw err1;
                } else {
                    console.log(results2);
                    res.render('viewData', {title: 'E-collect', individualInfo: results1, companyInfo: results2});
                }
            });
        }
    });
});

router.post('/deletByID', function (req, res) {
    const ID = req.body.ID;
    const Type = req.body.Type;

    let query;

    if (Type === 'I') {
        query = "DELETE FROM Individual WHERE ID='" + ID + "';";
    } else {
        query = "DELETE FROM Company WHERE ID='" + ID + "';";
    }

    con.query(query);
    res.send("done");
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'E-collect'});
});
router.get('/home', function (req, res, next) {
    res.render('index', {title: 'E-collect'});
});

module.exports = router;