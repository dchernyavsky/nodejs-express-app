const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;
const app = express();
app.use(cors());
app.use("/", router);

const appInit = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to database ${DB_URL}`);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

appInit();
