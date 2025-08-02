const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

// posting function
router.post(
  "/",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").isLength({ min: 3 }),
    body("location").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const pushData = {
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      };
      const data = await Users.create(pushData);
      res.send(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Failed to fetch data");
    }
  }
);

// getting function
router.get("/", async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection("users");
    const data = await collection.find({}).toArray();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Failed to fetch data");
  }
});

module.exports = router;
