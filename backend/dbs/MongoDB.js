const mongoose = require('mongoose');
const mainUrl = 'mongodb+srv://porashorbabu:Porashor12%40@foodie.vzureix.mongodb.net/FoodieData'



// Connect to MongoDB
const connectDB  = ()=>{
    mongoose.connect(mainUrl)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error));

}
module.exports = connectDB;