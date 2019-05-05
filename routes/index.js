const express = require('express');
const router = express.Router();
const mysqlm = require('../mysql/mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-collect' });
});

router.get('/request', function(req, res, next) {
  res.render('request', { title: 'E-collect' });
});

function queries(){
    const individualTableQuery = "CREATE TABLE Individual (\n" +
        "    ID int NOT NULL AUTO_INCREMENT,\n" +
        "    FirstName varchar(30),\n" +
        "    LastName varchar(30),\n" +
        "    Gender varchar(10),\n" +
        "    EWasteType varchar(255), \n" +
        "    EWasteQuantity int, \n" +
        "    AgeRange varchar(10), \n" +
        "    PhoneNumber varchar(15), \n" +
        "    Address varchar(255),\n" +
        "    PRIMARY KEY (ID)" +
        ");";
    const companyTableQuery = "CREATE TABLE Company (\n" +
        "    ID int NOT NULL AUTO_INCREMENT,\n" +
        "    CName varchar(50),\n" +
        "    EName varchar(50),\n" +
        "    CompanyType varchar(20),\n" +
        "    EWasteType varchar(255), \n" +
        "    EWasteQuantity int, \n" +
        "    CPhoneNumber varchar(15), \n" +
        "    EPhoneNumber varchar(15), \n" +
        "    Address varchar(255),\n" +
        "    PRIMARY KEY (ID)" +
        ");";
}

router.post('/individualInfo', function(req, res) {
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

    mysqlm.execute();
    res.send("done");
});

router.post('/companyInfo', function(req, res) {
    console.log(req.body);
    const CName = req.body.CName;
    const EName = req.body.EName;
    const CompanyType = req.body.CompanyType;
    const EWasteType = req.body.EWasteType;
    const EWasteQuantity = req.body.EWasteQuantity;
    const CPhoneNumber = req.body.CPhoneNumber;
    const EPhoneNumber = req.body.EPhoneNumber;
    const Address = req.body.Address;

    const query = "INSERT INTO Individual(CName, EName, CompanyType, EWasteType, EWasteQuantity, CPhoneNumber, " +
        "EPhoneNumber, Address) VALUES ('" + CName + "', '" + EName + "', '" + CompanyType + "', '" + EWasteType + "'," +
        "'" + EWasteQuantity + "', '" + CPhoneNumber + "', '" + EPhoneNumber + "', '" + Address + "');";

    mysqlm.execute();
    res.send("done");
});

router.post('/companyInfo', function(req, res, next){
    console.log(req.body)
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'E-collect' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'E-collect' });
});

module.exports = router;
