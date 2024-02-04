const express = require('express');
const app = express();
const parser = require('body-parser');

const adminRoute = require("./routers/admin");

const shopRoute = require("./routers/shop");

app.use(parser.urlencoded({extended: false}));

app.use('/admin',adminRoute);

app.use(shopRoute);

app.use((req, res, next)=>{
    res.status(404).send('<h1>"Page not found"</h1>')
})

app.listen(3000);