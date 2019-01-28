const express = require('express');

const routes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);
app.use(shopRoutes);





app.listen(5000);


