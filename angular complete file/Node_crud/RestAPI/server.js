//import the express module
//require() is the predefined function in nodejs, used to import the modules
//require() will return object
let express = require("express");


//create the rest object
//rest object used to develop the rest services
//we will create rest object by using express module
let app = express();
//where "app" is the rest object
//where "app" object used to develop the rest apis


//get request
app.get("/",(req,res)=>{
    res.send("mysql connection soon...!");
});
app.get("/mongodb",(req,res)=>{
    res.send("mongodb connection soon...!");
});
//post request
app.post("/",(req,res)=>{
    res.send("sqlserver connection soon...!");
});
app.post("/firebase",(req,res)=>{
    res.send("firebase connection soon...!");
});

//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");








