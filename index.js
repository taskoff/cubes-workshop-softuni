const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];

const app = require('express')();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const cubeRouter = require('./routes/cube');
const accesoryRouter = require('./routes/accesory');
const authRouter = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

require('./config/express')(app);
app.use(cookieParser());
app.use('/', accesoryRouter);
app.use('/', cubeRouter);
app.use('/', authRouter);
app.use('/', indexRouter);
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));