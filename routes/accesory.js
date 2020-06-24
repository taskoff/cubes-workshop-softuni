const express = require('express');
const router = express.Router();
const {getCube, } = require('../controllers/cube');
const {saveAccessory, getAccesories} = require('../controllers/accessory');
const cube = require('../models/cube');

router.get('/create/accessory', (req, res)=>{
    res.render('createAccessory')
})
router.post('/create/accessory', async (req, res)=>{
    const {
        name, 
        description, 
        imageUrl
    } = req.body;

    await saveAccessory({name, description, imageUrl});
    res.redirect('/create/accessory')
})

router.get('/attach/accessory/:id', async (req, res)=>{
    const id = req.params.id;
    const cube = await getCube(id);
    const accessories = await getAccesories();
    const isNoFull = cube.accessories.length !== accessories.length
    res.render('attachAccessory',{
        ...cube,
        accessories, 
        isNoFull
    })
})

router.post('/attach/accessory/:id', async (req, res)=>{
    const id = req.params.id;
    const {accessory} = req.body;
    console.log(req.body)
    await cube.findByIdAndUpdate(id, { $addToSet:{accessories: [req.body.accessory]} })
    res.redirect(`/details/${id}`)
})

module.exports = router