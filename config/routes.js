const {getCubes, getOneCube} = require('../controllers/database')

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