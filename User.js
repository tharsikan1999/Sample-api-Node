const { Schema } = require("mongoose");

const mongoose = require("./connectDB");

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  age: Number,
  country: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
