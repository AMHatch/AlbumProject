const express = require('express');
const router = express.Router();
//import data from data.json
const dataFile = require('../data/data.json')

//{band:[{},{},{}]}


router.get('/albums', (req,res) => {


    res.render('albums',{
        
    })

})

module.exports = router