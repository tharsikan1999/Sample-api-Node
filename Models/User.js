const { Schema } = require("mongoose");

const mongoose = require("../Mongodb/connectDB");

const userSchema = new Schema({
  name: {
    type: String,
    required: true, // Name is required
    minlength: 2, // Minimum length of name
    maxlength: 50, // Maximum length of name
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // Email format validation
  },
  phone: {
    type: String,
    required: true, // Phone is required // Phone number format validation
  },
  age: {
    type: Number,
    required: true, // Age is required
    min: 18, // Minimum age
    max: 120, // Maximum age
  },
  country: {
    type: String,
    required: true, // Country is required
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
