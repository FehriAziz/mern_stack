const User = require('../models/user.model')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports = {
    registerOld: (res, req) => {
        User.create(res, req)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },


    register: async (req, res) => {
        try {
            const user = new User(req.body)
            const newUser = await user.save()
            const userToken = jwt.sign({id:e=newUser._id},SECRET)
            res.status(201)
            .cookie("userToken",userToken,{httpOnly:true})
            .json(newUser)
        }
        catch (error) {
            res.status(400).json(error)
        }
    },


    login:async (res, req) => {
        
            const userFromDB =await User.findOne({email:req.body.email});
            if(!userFromDB){   
                res.status(404).json({error:"error not found"})
                }else{
                    try{
                        const isPasswordValid=await bcrypt.compare(req.body.password,userFromDB.password)

                        if (isPasswordValid){
                            const userToken = jwt.sign({id:e=newUser._id},SECRET)
                            console.log(`USER ID ${userFromDB._id}\nuserToken :${userToken}`);
                            res.status(200).json({message:"user logged IN successfully !!!!"})
                            // .cookie("userToken",userToken,{httpOnly:true})
                        }else{
                            res.status(400).json({message:"password incorrect"})
                        }
                    }
        catch(error){
            res.status(400).json({message:"invalid Email/password",error})
            }
        }
    },
    
    logout:async (res, req) => {
        try{
            // console.log(req.cookies.userToken);
                    res.clearCookie("userToken")
                    res.status(200).json({message:"user Logged out successfully "})
        }
        catch(error) {
            res.status(500).json({message:"something went wrong ",error})
        }
        
    },

    getLoggedUser : async (req,res)=>{
        try {
            const userToken = req.cookies.userToken;
            const loggedUserId = jwt.verify(userToken,SECRET)
            // console.log(`userToken ${userToken}\n User Id : ${loggedUserId}`);
            console.log(loggedUserId.id,loggedUserId.id);
            const {id} = loggedUserId
            const user =await User.findOne({_id :loggedUserId.id})
            res.status(200).json({message : "User found"})

        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"No user found"})

        }

    }


}