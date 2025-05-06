const express = require('express');
const colors = require('colors');
//rest object
const app = express();
const PORT = 8080;

const morgan = require('morgan');
const mysqlPool = require('./config/db');
//middleware, refresh the page you can see in terminal the url request
app.use(morgan('dev'));
//it will enable us to receive json data
app.use(express.json());
//configure env
require('dotenv').config();
app.use('/api/v1/weapons', require('./routes/weaponsRoutes'));
mysqlPool.query('SELECT 1').then(() => {
    console.log('Connected to database'.bgCyan.white);

    //routes
    app.get('/test', (req, res) => {
        res.send('<h1>Test</h1>');
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`.bgMagenta.white);
    });
}).catch((error) => {
    console.log(error);
});
//listening port

