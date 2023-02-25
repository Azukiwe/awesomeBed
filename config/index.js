require('dotenv').config();
let {createPool}=require('mysql');
let connection = createPool({
    host:process.env.HOST,
    database:process.env.DBName,
    user:process.env.dbUSER,
    password:process.env.dbPass,
    port:process.env.dbPort,
    multipeStatements:true
})
module.exports = connection;