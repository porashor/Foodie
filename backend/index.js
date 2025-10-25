const express = require("express");
const connectDB = require("./dbs/MongoDB");
const Food = require("./food/food"); 
const Category = require("./catagory/catagory");
const Users = require("./user/usersall");
const logUser = require("./user/loguser");
const cors = require("cors");
const order = require("./OrdersRoute/order");

// Create an Express application
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://foodie-8txr.onrender.com"
  ], // or "*" for all origins during dev
  credentials: true
}));

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
app.use("/login", logUser);
app.use("/order", order);

// main app is listening on port 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
