const mongoose = require('mongoose')
const {isEmail}= require ('validator')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required :[true, 'User Name is important !!!!'],
        minlength : [3 , "at least 3 characters"]
    },
    email :{
        type :String,
        required :[true , "Email must exist !!! "],
        validate :[isEmail,"email not valid"]
        // validate : {
        //     validator : val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        //     message :"please enter a valid email "
        },
    
    password : {
        type: String,
        required :[true , "Password very required "],
        minlength : [6, "Password too short"]
    }
})
UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)
UserSchema.pre('validate',function(next) {
    console.log("inside validate confirm password");
    console.log(`password : ${this.password}\n confirm password ${this.confirmPassword}`);
    if ( this.password != this.confirmPassword){
        this.invalidate('confirmPassword','password must match')
    }
    next()
})

UserSchema.pre('save', async function(next){
    console.log("inside pre save hook");
    try{
        const hashedPassword = await bcrypt.hash(this.password,10);
        console.log(`password test : ${this.password}\nHASHED PASSWORD : ${hashedPassword}`);
        
        this.password= hashedPassword;   

    }
    catch(error){

    }
})
const User = mongoose.model('User',UserSchema);
module.exports=User;