//import the modules
//require() is the predefined function in nodejs, used to import the modules
let express = require("express");
let mysql = require("mysql");
let cors = require("cors");
let jwt = require("jwt-simple");
let bodyparser = require("body-parser");
//create the master object (rest object) by using express module
let app = express();
//where "app" object used to develop the rest apis
//enable the cors policy
app.use(cors());
//set the MIME Type  (JSON)
app.use(bodyparser.json());
//read the JSON Coming from client
app.use(bodyparser.urlencoded({extended:false}));
//create the connection object
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"workshop"
});
//connect to database
connection.connect();
//create the rest api
app.post("/login",(req,res)=>{
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,(err,records,fields)=>{
        if(records.length>0){
            let token = jwt.encode({uname:req.body.uname,
                                    upwd:req.body.upwd},"hr@tcs.com");
            res.send({login:"success",token:token});
        }else{
            res.send({login:"fail"});
        }
    });
});
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");

