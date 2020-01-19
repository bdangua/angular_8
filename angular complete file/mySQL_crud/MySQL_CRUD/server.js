//import express module
let express = require("express");
//import cors module
let cors = require("cors");
//import body-parser module
let bodyparser = require("body-parser");
//create the rest object
let app = express();
//enable the ports communication
app.use(cors());
//set the JSON as MIME Type
app.use(bodyparser.json());
//read the JSON from client
app.use(bodyparser.urlencoded({extended:false}));
//use custom modules
app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/delete",require("./delete/delete"));
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");
