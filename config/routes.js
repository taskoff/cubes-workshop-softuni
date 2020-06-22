const {getCubes, getOneCube, saveCube} = require('../controllers/database');
const { Cube } = require('../models/cube');

module.exports = (app) => {
    app.get('/',  (req, res)=>{
        getCubes().then(d=>{
            res.render('index',{
                cubes: JSON.parse(d),
               
            });
        })
       
    })

    app.get('/about', (req, res)=>{
        res.render('about')
    })
    app.get('/create', (req, res)=>{
        res.render('create')
    })
    app.post('/create', (req, res)=>{
        const {
            name,
            description,
            imageUrl,
            difficultyLevel
        } = req.body;
        const newCube = new Cube(name, description, imageUrl, difficultyLevel);
        saveCube(newCube).then(d=>{res.redirect('/')})
    })
    app.get('/details/:id', (req, res)=>{
        const id = req.params.id;
        getOneCube(id).then(d=>{
            res.render('details', { ...d })
        }) 
    })
    app.get('*', (req, res)=>{
        res.render('404')
    })
};