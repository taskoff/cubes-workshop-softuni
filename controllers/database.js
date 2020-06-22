const fs = require('fs');
const {Cube} = require('../models/cube');
const path = require('path');
const databaseFile = path.join(__dirname,'..','config/database.json');

const getCubes = () => {
    const cubes = fs.readFileSync(databaseFile,"utf8", (err,data)=>{
        if(err){
            console.log(err);
            return
        }
        return data;
    })

    return new Promise((resolve, reject)=>{
        resolve(cubes);
    });
}

const getOneCube = (id) =>{
    return  getCubes().then(d=>{
        const cubes = JSON.parse(d);
        return cubes.filter(c=>c.id === id)[0]
    })

}

const saveCube = (cube) =>{
    const cubes = getCubes().then(d=>{
        const data =  JSON.parse(d);
        data.push(cube);
        fs.writeFileSync(databaseFile, JSON.stringify(data))
    })
}
 
//  const cube1 = new Cube("test1", "description1", "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg", 1);
//  const cube2 = new Cube("test2", "description2", "https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg", 2);
//  const cube3 = new Cube("test3", "description3", "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg", 3);



//  saveCube(cube1)
//  saveCube(cube2)
//  saveCube(cube3)


 

module.exports = {
    getCubes,
    saveCube,
    getOneCube
}