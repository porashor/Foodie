const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    state: {
        type: Array,
        required: true
    },
    TotalAmount:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Orders', OrderSchema);