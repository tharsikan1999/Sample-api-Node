const express = require("express");
const router = express.Router();

const User = require(".././Models/User");

router.get("/api/get", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
