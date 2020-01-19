//import the modules
//@express      @cors
//require() is the predefined function in nodejs
//require() function used to import the modules
let express = require("express");
let cors = require("cors");


//create the rest object
let app = express();
//where "app" object used to develop the rest services


app.use(cors());

//middleware
//in general we will use middleware for authentication
//arrow functions behaves like middleware
let myMiddleware = (req,res,next)=>{
    let allHeaders = req.headers;
    let title = allHeaders.title;
    if(title == "nareshit"){
        next();
    }else{
       res.send({authentication:"fail"});
    }
};
//create the rest api
app.get("/test",[myMiddleware],
                            (req,res)=>{
    res.send({authentication:"success"});
});
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");