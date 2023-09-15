const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Title is required 👻👻👻"],
        minlength: [3, "Title must be greater than 3 characters"]
    },
    price:{
        type : Number ,
        require:[ true,"{PATH}Price is Required 😡😡😡" ],
        min: 1,
    },
    description:{
        type:String,
        require:[true, "Description  is required 👹👹👹"],
        minlength: [7, "Description must be greater than 7 characters"]
    },
},{ timestamps: true})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;