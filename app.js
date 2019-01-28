const http = require('http');

const express = require('express');

const app = express();


//this is 'middleware'
app.use('/', (req, res, next) => {

    //use 'send' to send a response. used instead of setHeader and write
    //when sending a response, you DO NOT want to use next()
    next();
});

app.use('/add-product', (req, res, next) => {

    res.send('<h1>this is product page</h1>');
})


app.listen(5000);


