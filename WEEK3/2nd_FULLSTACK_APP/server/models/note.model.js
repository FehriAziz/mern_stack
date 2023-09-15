const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title : {
        type:String,
        required:[true , "Note Title is required⛔⛔⛔"],
        minLength : [3 , "Title must be at least 3 characters ⛔⛔⛔" ]
    },
    content :{
        type    : String,
        required:[true ,"content must be present ⛔⛔⛔"],
        minLength :[10 , "content is too short ⛔⛔⛔"]
    },
    isImportant :{
        type     : Boolean,
        default   : false
    }
} , {timestamps:true});

const Note = mongoose.model('Note' , NoteSchema);

module.exports = Note;