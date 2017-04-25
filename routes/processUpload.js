const multer = require('multer');
const uploadFile = multer({dest: './uploads/'});
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.use(uploadFile.single('fileUpload'));

router.post('/', (req, res) => {
  if (!req.file) {
    return res.status(400).send('400: Bad request. Make sure that you have uploaded a valid file.');
  }
  const fileSize = req.file.size;
  const fileName = req.file.filename;
  fs.stat('./uploads', (err, stats) => {
    if(err) throw err;
    if(stats.isDirectory()) {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
      });
    }
  })
  return res.send({ fileSize: req.file.size });
});

module.exports = router;