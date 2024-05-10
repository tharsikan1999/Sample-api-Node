const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require(".././Models/User");

router.put("/api/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const objectId = new mongoose.Types.ObjectId(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const data = req.body;
    const result = await User.updateOne({ _id: objectId }, { $set: data });
    if (result.modifiedCount === 1) {
      return res.status(200).send("Data updated successfully");
    } else {
      return res.status(404).send("Student not found in database to update");
    }
  } catch (err) {
    console.error("Error updating data in database:", err);
    return res.status(500).send("Error updating data in database");
  }
});

module.exports = router;
