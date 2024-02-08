const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rjprvdb.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
app.use(cors());
app.use("/", router);

const appInit = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to database");
    app.listen(4000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

appInit();
