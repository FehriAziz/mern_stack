const mongoose  = require('mongoose')

const NoteSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Note Title is required ❌❌❌"],
        minlength:[3, "Title must be at least 3 characters ⛔⛔⛔"]
    },
    content:{
        type:String,
        required:[true, "Content must be present 🛑🛑🛑"],
        minlength:[10, "Content is Too short 🤬🤬🤬"]
    },
    isImportant : {
        type:Boolean,
        default:false
    },

    user : {
        type:mongoose.Types.ObjectId ,
        ref:'User' //ref means reference to another model in this case User Model
    }
}, {timestamps:true});

module.exports = mongoose.model('Note', NoteSchema);