const express = require('express');
const app = express();
const path = require('path');

const parser = require('body-parser');

const adminData = require("./routers/admin");

const shopRoute = require("./routers/shop");

const process = require('./routers/process')

app.use(parser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);

app.use(shopRoute);

app.use('/admin', process.routes);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);