const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





// posting function
router.post("/", async (req, res) => {
  try {
    const pushData = {
      email: req.body.email,
      password: req.body.password,
    };
    const data = await Users.findOne({email: pushData.email});
    const comparedPassword = await bcrypt.compare(pushData.password, data.password);
    if (!data && !comparedPassword) {
      return res.status(404).json({message: "User not found"});
    }else{ 
      const token = jwt.sign({ id: data._id, name: data.name, email: data.email }, "123456", {
          expiresIn: "7d"
      });
      res.status(200).json({message: "Login successful", user: data, auth: token});
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Failed to fetch data");
  }
});





// module exporting 
module.exports = router;





// Set the token in cookies
        // res.cookie("token", token, {  
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: "strict",
        //     maxAge: 3600000, // 1 hour
        // });
        // console.log("Login successful, token set in cookies");
        // res.json({message: "Login successful", user: data});