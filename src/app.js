const express=require("express");

const app=express();

app.use("/home",(req,res)=>{
    res.send("hiii nishuuu");
});

app.listen(7777,()=>{
    console.log("hiii from server 3000");
});
