'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3000;



app.get('/hello', (req, res) => {
    res.status(200).send(' All is good in Express Town! 🏛️');
});

app.put('/hello', (req, res) => {
    res.status(200).send(' This is a put request!');
});


app.get('/error', (req, res, next) => {
    throw new Error('You made an Error 🛑❗');
});

app.get('/person', validator, (req, res, next) => {

    const output = req.query.name;

    res.status(200).json({ name: output });
});

app.use('*', notFoundHandler);
app.use(logger);
app.use(errorHandler);

function start() {
    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    });
}


module.exports = {
    server: app,
    start: start
}