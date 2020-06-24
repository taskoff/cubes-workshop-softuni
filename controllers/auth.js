const User = require('../models/user');
const jwt = require('jsonwebtoken');
const privateKey = 'MY_VERY_SECRET_KEY';

const generateToken = (data)=>{
    const token = jwt.sign(data, privateKey);
    return token;
}

const registerUser = async (u)=> {
    const newUser = new User(u);
    await newUser.save();
    return newUser;
}

module.exports ={
    registerUser,
    generateToken
}