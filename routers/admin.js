const express =require('express');

const pathDir =require('../helper/path')

const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(pathDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;