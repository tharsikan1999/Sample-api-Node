const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require("../Models/User");

router.delete("/api/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const objectId = new mongoose.Types.ObjectId(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const result = await User.deleteOne({ _id: objectId });
    if (result.deletedCount === 1) {
      return res.status(200).send("Data deleted successfully");
    } else {
      return res.status(404).send("Student not found");
    }
  } catch (err) {
    console.error("Error deleting data from database:", err);
    return res.status(500).send("Error deleting data from database");
  }
});

module.exports = router;
