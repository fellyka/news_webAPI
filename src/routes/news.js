const express = require('express');
const routeNews = express.Router()

routeNews.get('',async(req, res)=>{
    res.render('news')
})
module.exports=routeNews