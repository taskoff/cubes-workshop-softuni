const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 200
    },
    imageUrl: {
        type: String,
        required: true
    },
    difficulty: {
            type: Number,
            required: true
    },
    
    accessories:[{
        type: 'ObjectId',
        ref: 'Accessory'
    }]
    
})

module.exports = mongoose.model('Cube', cubeSchema)