//import db_properties
let obj = require("./db_properties");
//import mysql module
let mysql = require("mysql");
//create the JSON Object
let conn = {
    getConnection : ()=>{
        return mysql.createConnection(obj);
    }
};
//export the json object
module.exports = conn;