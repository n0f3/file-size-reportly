'use strict';
const express = require('express');
const path = require('path');
const htmlDir = path.join(__dirname, 'public', 'html');
const helmet = require('helmet');
const processUpload = require('./routes/processUpload');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/processupload', processUpload);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));