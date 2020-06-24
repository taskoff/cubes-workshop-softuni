const User = require('../models/user');

const registerUser = async (u)=> {
    const newUser = new User(u);
    await newUser.save();
    return newUser;
}

module.exports ={
    registerUser
}