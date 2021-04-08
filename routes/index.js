const express = require('express');

const aboutRoute =require('./about');
const officeDesignRoute =require('./officedesign');
const residentialDesignRoute =require('./residentialdesign');
const commercialDesignRoute =require('./commercialdesign');
const contactRoute =require('./contactus');

const router =express.Router();

module.exports = ()=>{
    router.get('/',(req,res)=>{
        res.sendFile('/index.html');
    });

    router.use('/about',aboutRoute());
    router.use('/office-design',officeDesignRoute());
    router.use('/residential-design',residentialDesignRoute());
    router.use('/commercial-design',commercialDesignRoute());
    router.use('/contactus',contactRoute());

    return router;
};


