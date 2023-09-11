const mongoose = require ('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName : {
        type :String,
        required: [true , "FIRST NAME REQUIRED⛔⛔⛔ "],
        minlength: [3 , "First name must be greater than 3 characters"]
    },

    lastName : {
        type : String,
        required : [true , "Last name is required ⛔⛔⛔"],
        minlength: [3 , "First name must be greater than 3 characters"]
    },

    age : {
        type : Number,
        required : [true , "{PATH} is very required "],
        min:1,
        max : 120
    },

    isFunny : {
        type : Boolean,
        default : false
    },

},{timestamps:true})


const Person = mongoose.model('Person' , PersonSchema);
module.exports=Person;