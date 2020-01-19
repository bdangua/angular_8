//create and export the module
module.exports = require("express").Router().get("/",
                                        (req,res)=>{
    let conn = require("../config/db_connection");
    let connection = conn.getConnection();

    let queries = require("../config/queries");
    queries.fetch(connection,res);
});