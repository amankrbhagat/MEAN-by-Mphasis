var mysql = require('mysql2');
var con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"Admin@123"   /// this password will be the same as the password which is in mysql CLI. 
});

con.connect(function (err)
{
if(err) throw err;
console.log("Data base connected");

});
