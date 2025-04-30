// var mysql = require('mysql2');
// var con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Admin@123"   /// this password will be the same as the password which is in mysql CLI. 
// });

// con.connect(function (err)
// {
// if(err) throw err;
// console.log("Data base connected");

// });



//step1
// var mysql = require('mysql2');
// var con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Admin@123"
// });

// con.connect(function (err)
// {
// if(err) throw err;
// console.log("Database connected");
// con.query("create database weekend1",function(err,result)
// {
// if(err) throw err;
// console.log("Database created");
// });
// });


// step2
// var mysql = require('mysql2');
// var con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Admin@123",
//     database:"weekend1"
// });

// con.connect(function (err)
// {
// if(err) throw err;
// console.log("Database connected");
// var sql = "create table student1(rollno int,name varchar(30),address varchar(30))";
// con.query(sql,function(err,result)
// {
// if(err) throw err;
// console.log("Table created");
// });
// });


// step3
// var mysql = require('mysql2');
// var con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Admin@123",
//     database:"weekend1"
// });

// con.connect(function (err)
// {
// if(err) throw err;
// console.log("Database connected");
// var sql = "insert into student1 values(101,'sandip','bangalore')";
// var sql = "insert into student1 values(103,'Aman','bangalore')";
// con.query(sql,function(err,result)
// {
// if(err) throw err;
// console.log("row inserted");
// });
// });


//step4

// var mysql = require('mysql2');
// var con=mysql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Admin@123",
//     database:"weekend1"
// });

// con.connect(function(err)
//  {
//   if (err) throw err;
// var abc="SELECT * FROM student1 WHERE address = 'bangalore' ";
//   con.query(abc,function (err, result) 
// {
//     if (err) throw err;
//     console.log(result);
//   });
// });


