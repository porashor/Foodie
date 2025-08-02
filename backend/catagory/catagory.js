const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
    try {
    const collection = mongoose.connection.db.collection("catagory"); 
    const data = await collection.find({}).toArray(); 

    console.log(data); 
    res.json(data);    
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Failed to fetch data");
  }
})


module.exports = router;