const {getCubes, saveCube, getCube} = require('../controllers/cube');
const {saveAccessory, getAccesories} = require('../controllers/accessory');

module.exports = (app) => {
    app.get('/',  async (req, res)=>{
        const cubes = await getCubes()
            getAccesories()
        res.render('index', {
            cubes
        })
       
    })

    app.get('/about', (req, res)=>{
        res.render('about')
    })
    app.get('/create', (req, res)=>{
        res.render('create')
    })
    app.post('/create', async (req, res)=>{
        const {
            name,
            description,
            imageUrl,
            difficultyLevel
        } = req.body;
        await saveCube({name, description, imageUrl, difficulty: difficultyLevel})
        res.redirect('/');
    })
    app.get('/details/:id', async (req, res)=>{
        const id = req.params.id;
        const cube = await getCube(id);

        res.render('details', {
            ...cube
        })
    })

    app.get('/create/accessory', (req, res)=>{
        res.render('createAccessory')
    })
    app.post('/create/accessory', async (req, res)=>{
        const {
            name, 
            description, 
            imageUrl
        } = req.body;

        await saveAccessory({name, description, imageUrl});
        res.redirect('/create/accessory')
    })

    app.get('/attach/accessory/:id', async (req, res)=>{
        const id = req.params.id;
        const cube = await getCube(id);
        res.render('attachAccessory',{
            ...cube
        })
    })
    app.get('*', (req, res)=>{
        res.render('404')
    })
};