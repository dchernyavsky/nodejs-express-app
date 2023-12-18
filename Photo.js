const mongoose = require("mongoose");

const Photo = new mongoose.Schema({
  albumId: { type: Number },
  id: { type: Number },
  title: { type: String },
  url: { type: String },
  thumbnailUrl: { type: String },
});

module.exports = mongoose.model("Photo", Photo);
