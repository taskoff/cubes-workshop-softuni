const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = 'MY_VERY_SECRET_KEY';

router.get('/login', (req, res)=>{
    res.render('loginPage');
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
            console.log(user)
            jwt.sign({ username, hash }, privateKey,  function(err, token) {
                console.log(token);
                res.cookie('uinfo', token)
                res.redirect('/');
              });
        })
})

})


module.exports = router