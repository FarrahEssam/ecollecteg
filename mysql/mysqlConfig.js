module.exports = {
    host: "db4free.net", //database host
    user: "ecollectun",  //database username
    password: "ecollectpassword",//database password
    database: "ecollect" //database name
};

function queries() {
    const individualTableQuery = "CREATE TABLE Individual (\n" +
        "    ID int NOT NULL AUTO_INCREMENT,\n" +
        "    FirstName varchar(255),\n" +
        "    LastName varchar(255),\n" +
        "    Gender varchar(255),\n" +
        "    EWasteType varchar(255), \n" +
        "    EWasteQuantity int, \n" +
        "    AgeRange varchar(255), \n" +
        "    PhoneNumber varchar(255), \n" +
        "    Address varchar(255),\n" +
        "    PRIMARY KEY (ID)" +
        ");";
    const companyTableQuery = "CREATE TABLE Company (\n" +
        "    ID int NOT NULL AUTO_INCREMENT,\n" +
        "    CName varchar(255),\n" +
        "    EName varchar(255),\n" +
        "    CompanyType varchar(255),\n" +
        "    EWasteType varchar(255), \n" +
        "    EWasteQuantity int, \n" +
        "    CPhoneNumber varchar(255), \n" +
        "    EPhoneNumber varchar(255), \n" +
        "    Address varchar(255),\n" +
        "    PRIMARY KEY (ID)" +
        ");";

}