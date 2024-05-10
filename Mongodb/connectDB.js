const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SampleApi");
const db = mongoose.connection;

db.on("error", function (err) {
  console.error("MongoDB connection error:", err);
});

db.once("open", function () {
  console.log("MongoDB connected successfully");
});

module.exports = mongoose;
