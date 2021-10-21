const express = require('express');
const router = express.Router();
//import data from data.json
const dataFile = require('../data/data.json')
let pageAlbums = dataFile.albums

router.get('/albums', (req,res) => {
    //display all albums
    let albumCovers =[]
    pageAlbums.forEach(albumObj =>{
        albumCovers = albumCovers.concat(albumObj.artwork)
    })
    res.render('albums',{
        artwork: albumCovers,
        albums: pageAlbums,
        pageTitle: "Albums | Unleash the Archers"

        
    })

})
router.get('/albums/:albumid',(req,res) => {
    //display one album
    let album = req.params.speakerid
    let photos = []
    let albums = []

    pageAlbums.forEach(albumObj =>{
        if( albumObj.shortname === album){
            photos = [...albumObj.artwork]
            albums.push(albumObj)
        }
    })
    
    res.render('albums',{
        artwork: albumCovers,
        albums: pageAlbums,
        pageTitle: `${albums[0].name} | Unleash the Archers`

    })
})
module.exports = router