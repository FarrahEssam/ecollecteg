const mysql = require('mysql');

exports.execute = (sql)=>{
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root1234",
        database: "ecollect"
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("query executed");
    });
});
};

