const express=require("express");

const app=express();

const connectDB=require("./config/database");

const User=require("./models/user")


app.post("/signup",async(req,res)=>{
    const user=new User({
     firstName:"Nisha",
     lastName:"Bharti",
     age:25,
     password:"Nisha",

    });

    try{
    await user.save();
    res.send("User created");
    }
    catch(err){
        res.status(400).send("user is not created"+err);
    }
});

connectDB().then(()=>{
    console.log("database connected succesfully");
    app.listen(7777,()=>{
    console.log("hiii from server 3000");
});
})
.catch((err)=>{
    console.error("database cannot be connected")
});


