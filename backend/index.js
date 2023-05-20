const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/userModel");


app.use(express.json());


//to connect database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.URL).then(()=> {
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000 , (err)=> {
        if(err) console.log(err);
        console.log("running sucessfully at ", process.env.PORT);
    });
})
.catch((error) => {
    console.log("error",error)
});


//ceate
app.post("/",async(req,res) => {
    // var name = req.body.name;
    const {name , email , age , description } = req.body;


    const User = require("./models/userModel");

    try {
        const userAdded = await User.create({
            name: name, //forntend=backend ma put gareko
            email: email,
            age: age,
            description: description,
    
        });

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message})        
    }
});

//get
app.get("/",async (req,res) => {

    


    try {
        const showAll = await User.find()
        res.status(200).json(showAll);
  
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message})        
    }
})




// app.get("/",(req,res)=>{
//     res.send("api is running");
// })
