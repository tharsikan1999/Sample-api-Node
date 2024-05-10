const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require(".././Models/User");

router.post("/api/add", async (req, res) => {
  try {
    const data = req.body;
    await User.create(data);
    res.status(200).send("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data into database:", err);
    res.status(500).send("Error inserting data into database");
  }
});

module.exports = router;
