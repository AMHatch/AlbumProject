const express = require('express');
const router = express.Router();
//import data from data.json
const dataFile = require('../data/data.json')

//{band:[{},{},{}]}


router.get('/about', (req,res) => {


    res.render('about',{
        
    })

})


module.exports = router