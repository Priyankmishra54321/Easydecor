const mysql=require('mysql');
var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root"
});

mysqlConnection.connect((err)=>{
    if (err) throw err;
    console.log("Connection to SQL DB Established")
    mysqlConnection.query("CREATE DATABASE IF NOT EXISTS contact_form_details",(err)=>{
        if (err) throw err;
    });
    let sqlquery="CREATE TABLE IF NOT EXISTS contact_form_details.contact_form(name VARCHAR(255), email VARCHAR(320), ph_number VARCHAR(10), message MEDIUMTEXT)";
    mysqlConnection.query(sqlquery,(err3)=>{
        if(err3) throw err3;
    });
});

module.exports=mysqlConnection;