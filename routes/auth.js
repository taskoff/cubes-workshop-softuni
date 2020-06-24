const express = require('express');
const router = express.Router();
const {registerUser, generateToken} = require('../controllers/auth');
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.get('/login', (req, res)=>{
    res.render('loginPage');
})

router.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username});

    const status = bcrypt.compare(password, user.password);
    if (status) {
        const userId = user._id
        const token = generateToken({ username, userId })
        res.cookie('uinfo', token);
        res.redirect('/');
    }

})

router.get('/signup', (req, res)=>{
    res.render('registerPage');
})

router.post('/signup', (req, res)=>{
    const {
        username,
        password
        } = req.body ;

        bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(password, salt, async function(err, hash){

            const user = await registerUser({username, password:hash});
            const userId = user._id;
            const token = generateToken({username, userId})
            res.cookie('uinfo', token)
            res.redirect('/');
        })
})

})


module.exports = router