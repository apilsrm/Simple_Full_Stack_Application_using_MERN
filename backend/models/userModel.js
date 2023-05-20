const  mongoose = require("mongoose");

//This a Schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true

    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    },
    description:{
        type:String,
        required:true
    },
   
}, {timestamps:true} // crated date n time 

);

//Create Model  operation huni thou Model-->User
const User = mongoose.model('User', userSchema)

module.exports = User;