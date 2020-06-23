const Accessory = require('../models/accessory');

const saveAccessory = async (a)=>{
    const accessory = new Accessory(a);
    await accessory.save()
    return accessory
}

const getAccesories = async ()=>{
    const accessories = await Accessory.find().lean();
    return accessories
}

module.exports = {
    saveAccessory,
    getAccesories
}