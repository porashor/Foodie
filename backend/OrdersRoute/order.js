const express = require("express");
const router = express.Router();
const Orders = require("../model/Orders");
const mongoose = require("mongoose");

// posting function
router.post("/", async (req, res) => {
  const exist = await Orders.findOne({ email: req.body.email });
  if (!exist) {
    try {
      const pushData = {
        name: req.body.name,
        email: req.body.email,
        TotalAmount: req.body.TotalAmount,
        state: req.body.state,
      };
      const data = await Orders.create(pushData);
      console.log(data);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const pushData = {
        name: req.body.name,
        email: req.body.email,
        TotalAmount: req.body.TotalAmount,
        state: req.body.state,
      };
      const data = await Orders.findOneAndUpdate({ email: req.body.email }, pushData);
      console.log(data);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  }
});

router.get("/:email", async (req, res) => {
  try {
    const data = await Orders.findOne({ email: req.params.email });
    res.json(data);    
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Failed to fetch data");
  }
})

// module exporting
module.exports = router;
