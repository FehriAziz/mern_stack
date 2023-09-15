const mongoose  = require('mongoose')

const NoteSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required ❌❌❌"],
        minlength:[3, "Name must be at least 3 characters 🤬🤬🤬"]
    }
}, {timestamps:true});

module.exports = mongoose.model('Note', NoteSchema);