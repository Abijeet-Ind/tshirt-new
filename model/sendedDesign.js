const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    color: {
        type: Number,
        require: true
    },
    tshirtImage: {
        type: String,
    }
})

const order = new mongoose.model("sendedItem", orderSchema);
module.exports = order;