const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect('mongodb://root:password@mongo:27017/db?authSource=admin')
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch(err => console.log(err));