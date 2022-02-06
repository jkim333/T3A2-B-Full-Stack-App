require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");

const app = express();
const port = 3002;

app.use(express.json());
app.use("/auth", authRoutes);

mongoose
  .connect("mongodb://root:password@mongo:27017/db?authSource=admin")
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
