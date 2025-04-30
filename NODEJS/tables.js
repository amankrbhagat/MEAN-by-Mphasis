var mysql = require('mysql2');
var con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"Admin@123"
});

con.connect(function (err)
{
if(err) throw err;
console.log("Database connected");
con.query("create database weekend1",function(err,result)
{
if(err) throw err;
console.log("Database created");
});
}); 