const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const csv = require('csv-parser');
const fs = require("fs");
const helmet = require("helmet");
const port = 3002;

app.use(cors());
app.use(helmet());

const results = []
fs.createReadStream('./csv.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () =>  {
            JSON.stringify(results);
});


app.get('/', (req, res) => {
  res.send(results);
});

mongoose.connect('mongodb://root:password@mongo:27017/db?authSource=admin')
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch(err => console.log(err));