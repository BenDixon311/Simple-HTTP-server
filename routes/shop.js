const express = require('express');

const router = express.Router();

//this is 'middleware'
app.use('/', (req, res, next) => {

    //use 'send' to send a response. used instead of setHeader and write
    //when sending a response, you DO NOT want to use next()
    res.send('<h1>Hello there</h1>');
});

module.exports = router;