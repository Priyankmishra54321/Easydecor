const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
const mysqlConnection=require('../sqldata/connection');
const router =express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
module.exports = ()=>{
    router.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../contactus.html'));
    });

    router.post('/',(req,res)=>{
        var name=(req.body.uname);
        var email=(req.body.email);
        var ph_num=(req.body.number);
        var message=(req.body.message);

        var sql_query=`INSERT INTO contact_form_details.contact_form (name,email,ph_number,message) VALUES ('${name}','${email}','${ph_num}','${message}')`;
        mysqlConnection.query(sql_query,(err)=>{
            if (err) throw err;
            console.log("Elements successfully appended");
            res.send("<h1>Your Response has been Recorded.</h1>");
        });
    });

    return router;
};


