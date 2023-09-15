const Note = require('../models/note.model')

module.exports = {
    findAll :(req,res) => {
        Note.find()
        .then(dbResponse =>{
            console.log("DATABASE RESPONSE TO FIND ALL : ", dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :" ,dbError);
            res.status(400).json(dbError)
        })
    },

    findOne :(req,res) => {
        Note.findById(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE TO FIND ONE : ",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR TO FIND ONE :" ,dbError);
            res.status(400).json(dbError)
        })
    },
    
    create :(req,res) => {
        Note.create(req.body)
        .then(dbResponse =>{
            console.log("DATABASE RESPONSE : ",dbResponse);
            res.status(201).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR TO FIND ONE :" ,dbError.error);
            res.status(400).json(dbError.error)
        })
    },
    
    update :(req,res) => {
        Note.findByIdAndUpdate(req.params.id , req.body, {new:true ,runValidators:true})
        .then(dbResponse =>{
            console.log("DATABASE RESPONSE : ",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR TO FIND ONE :" ,dbError);
            res.status(400).json(dbError)
        })
    },
    
    delete :(res,req) => {
        Note.findByIdAndDelete(req.params.id)
        .then(dbResponse =>{
            console.log("DATABASE RESPONSE : ",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR TO FIND ONE :" ,dbError);
            res.status(400).json(dbError)
        })
    }
}