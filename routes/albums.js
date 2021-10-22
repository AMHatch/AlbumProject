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
    console.log(pageAlbums);
    res.render('albums',{
        artwork: albumCovers,
        albums: pageAlbums,
        pageTitle: "Albums | Unleash the Archers",
        showDetails: false

        
    })

})
router.get('/albums/:albumid',(req,res) => {
    //display one album
    let album = req.params.albumid
    let photos = []
    let albums = []

    pageAlbums.forEach(albumObj =>{
        if( albumObj.shortname === album){
            photos = [...albumObj.artwork]
            albums.push(albumObj)
        }
    })

    res.render('albums',{
        artwork: photos,
        albums: albums,
        pageTitle: `${albums[0].name} | Unleash the Archers`,
        showDetails: true

    })
})
module.exports = router