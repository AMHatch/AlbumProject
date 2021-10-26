const express = require('express');
const router = express.Router();
const fs = require('fs')
let feedbackData = require('../data/feedback.json')

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/contact', (req,res) => {
    res.render('contact')
    })

router.get('/api', (req,res) => {
    console.log(feedbackData)
        res.json(feedbackData)
        
    })

router.post('/api', (req,res) => {
    //grab data from header, need body parser
    let {name, title, message} = req.body

    console.log(req.body);

    feedbackData.unshift(req.body) //js object 

    //save to feedback.json file

    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf8', (err) => {
        if(err){
            console.log(err);
        }
        console.log('feedback.json file has been updated');
    })
res.json(feedbackData)
})

router.delete('/api',(req,res) => {
const {id} = req.body
    feedbackData = feedbackData.filter((feedback,index) => {
        return index != id
    })
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf8', (err) => {
        if(err){
            console.log(err);
        }
        console.log('feedback.json file has been updated');
    })
    res.json(feedbackData)
    
})      

module.exports = router