const express = require('express');
const router = express.Router();
//import data from data.json
const dataFile = require('../data/data.json')
let contactDB = []

router.get("/contact", (req, res) => {
  res.render('contact')
});

router.post('/contact',(req,res) => {

  let name = req.body.name
  let email = req.body.email
  let phone = req.body.phone
  let website = req.body.website
  let message = req.body.message
  contactDB.push(req.body)


console.log(req.body);
console.log(contactDB);

})

module.exports = router;
