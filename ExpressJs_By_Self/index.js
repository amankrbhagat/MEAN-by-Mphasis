
// const express = require("express");
//or
import express from 'express'

// const { uNameController, searchKeywordController, userLogin, userSignup } = require("./controller.js");

// const { router } = require("./route.js");
import router from './route.js';




const app = express();     // we will create an app instance

const PORT = 3000;


// define a simple route
app.get('/',(req, res) =>{
    console.log("server started");
    res.send("Hello from server")
})

// app.get('/about',(req, res) =>{            //// (req, res) => {...} → This is the callback function that handles the request when the /users endpoint is hit.
//     res.send("Hello from server, This is about page")
// })
// app.get('/contact',(req, res) =>{
//     res.send("Hello from server, This is contact form")
// })


// // dynamic routing  using prameters
// app.get('/user/:username', (req, res)=>{    ///  dynamically username ko lene ke liye  ":"  use krna padega
//     const uName = req.params.username;      ///http://localhost:3000/user/Am   aise search krna pdega
//     res.send(`Welcome to our website, ${uName}!`);
// })

// //  using query string
// app.get('/search', (req, res)=>{    ///  dynamically username ko lene ke liye  ":"  use krna padega
//     const keyWord = req.query.keyword;   /// searh krte time ye wala "keyword" dalenge
//     res.send(`searching for, ${keyWord}!`); (req, res)=>{    ///  dynamically username ko lene ke liye  ":"  use krna padega
//     const keyWord = req.query.keyword;   /// searh krte time ye wala "keyword" dalenge
//     res.send(`searching for, ${keyWord}!`);  //ye keyWord variable wala h  //  http://localhost:3000/search?keyword=Aman      aise krke search krna pdega
// // })


// //importing same thing from different file
// app.get('/user/:username', uNameController)

// app.get('/search', searchKeywordController)


// app.get('/search/login', userLogin);
// app.get('/search/signup', userSignup);


/// now route in different way using route.js

app.use('/user', router);   // aise isliye kiye taki index.js file clean lge


app.post('/users', express.json() ,(req, res)=>{      ////  express.json()  middleware hai  jo incoming  json  data ko parseformat me convert krega
    const {name, email} = req.body
    res.json({
        message:`User ${name} with email ${email} created successfully`
    })
})  ////const { name, email } = req.body;
// req.body → Contains JSON data sent by the client (from a frontend form or API call).

// { name, email } → Destructures name and email from req.body, meaning the server expects data in this format:






































app.listen(PORT, ()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
    
})
