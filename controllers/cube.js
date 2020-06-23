const Cube = require('../models/cube');

const getCubes = async ()=>{
    const cubes = await Cube.find().lean();
    return cubes;
}

const saveCube = async (c) => {
    const cube = new Cube(c);
    await cube.save()
}

const getCube = async (id)=>{
    const cube = await Cube.findById(id).lean();
    return cube;
}

module.exports = {
    getCubes,
    saveCube,
    getCube
}