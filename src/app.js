const express=require("express");

const app=express();

const connectDB=require("./config/database");

const User=require("./models/user")
//post api
app.use(express.json());
app.post("/signup",async(req,res)=>{
    const user=new User(req.body);
    console.log(req.body);

    try{
    await user.save()
    res.send("user created");
    }
    catch(err){
      res.status(400).send("something went wrong");
    }
});

//get api

app.get("/getapi",async(req,res)=>{

    const userEmail=req.body.emailid;
    
    try{
      const user = await User.find({emailid:userEmail});
         res.send("user");    
    }
    catch(err){
          res.status(400).send("user not found");

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


