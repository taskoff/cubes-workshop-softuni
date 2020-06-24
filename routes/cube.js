const express = require('express');
const router = express.Router();
const {saveCube, getCubeWithAccessories} = require('../controllers/cube');

    
    router.get('/create', (req, res)=>{
        res.render('create')
    })
    router.post('/create', async (req, res)=>{
        const {
            name,
            description,
            imageUrl,
            difficultyLevel
        } = req.body;
        await saveCube({name, description, imageUrl, difficulty: difficultyLevel})
        res.redirect('/');
    })
    router.get('/details/:id', async (req, res)=>{
        const id = req.params.id;
        const cube = await getCubeWithAccessories(id);

        res.render('details', {
            ...cube
        })
    })

    router.get('/delete', async (req, res)=>{
            res.render('deleteCubePage')
    })
    router.get('/edit', async (req, res)=>{
        res.render('editCubePage')
})

    

   
module.exports = router;