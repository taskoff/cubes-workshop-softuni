const express = require('express');
const router = express.Router();
const {getCubes } = require('../controllers/cube');
const {getAccesories} = require('../controllers/accessory');


    router.get('/',  async (req, res)=>{
        const cubes = await getCubes()
            getAccesories()
        res.render('index', {
            cubes
        })
       
    })

    router.get('/about', (req, res)=>{
        res.render('about')
    })
    
    
    

    

    router.get('*', (req, res)=>{
        res.render('404')
    })
module.exports = router;