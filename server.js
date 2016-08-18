'use strict';
let express = require('express');
let path = require('path');
let app = express();
let multer = require('multer');
let uploadFile = multer({dest: './uploads/'});
const htmlDir = path.join(__dirname, 'public', 'html');
app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/processupload', uploadFile.single('fileUpload'), (req, res) => {
  return res.send({ fileSize: req.file.size });
});

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));