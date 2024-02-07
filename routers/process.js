const express =require('express');

const pathDir =require('../helper/path')

const path = require('path');

const router = express.Router();

router.get('/process_post', (req, res)=> {  
    res.sendFile(path.join(pathDir, 'views', 'process_post.html'));
});  

router.post('/process_post',  (req, res)=> {  
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 })  

 exports.routes = router;