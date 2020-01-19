module.exports = require("express").Router().post("/",
                                            (req,res)=>{
    let conn = require("../config/db_connection");
    let connection = conn.getConnection();

    let queries = require("../config/queries");
    queries.insert(connection,req,res);
});