const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required ❌❌❌"],
        minlength: [3, "title must be greater than 3 characters"]
    },

    price: {
        type: Number,
        required: [true, "{PATH} is very required"],
        min: 1,
        max: 120
    },

    description: {
        type: String,
        required: [true, "description is required 🎈🎈🎈"],
        minlength: [3, "description must be greater than 3 characters"]
    },

}, { timestamps: true });




const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;