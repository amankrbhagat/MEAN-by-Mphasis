const http = require("http");


const myServer = http.createServer( (req, res) => {      /// ye hamare liye ek web server bana dega.
    console.log("Hey Req. received");    /// user ko bta do ki ek request ayi hai
    res.end("Hello from server")   /// response ko end kar denge or ek msg de denge jo ki user ke browser me dikhega.
});  
myServer.listen(8000, () =>{
    console.log("Server started!");
})