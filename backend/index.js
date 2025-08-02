const express = require("express");
const connectDB = require("./dbs/MongoDB");
const Food = require("./food/food");
const Category = require("./catagory/catagory");
const Users = require("./user/usersall");


// Create an Express application
const app = express();
const port = 4000;
app.use(express.json());

// Connect to MongoDB
connectDB();


// main fail get put and others 
app.get("/", async (req, res) => {
 res.send("Welcome to the Foodie API");
});


// other router handling 
app.use("/food", Food);
app.use("/catagory", Category);
app.use("/users", Users);

// main app is listening on port 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
