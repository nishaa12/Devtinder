const express=require("express");

const app=express();


//app.use("/home",(req,res)=>{
   // res.send("hiii nishuuu");
//});
//app.use("/home123",(req,res)=>{
    //res.send("hiii 123");
//});

//app.get("/test/:userid/:name/:password",(req,res)=>{
    //console.log(req.params);
    //res.send("hello from test");
//});
//app.get("/",(req,res)=>{
    //res.send("hii ");
//});
const { adminauth } = require("./middlewares/auth.js");
app.use("/admin",adminauth);



//Route handlers
 app.get("/admin/getalldata",(req,res)=>{
    res.send("send all data")
     });

app.get("/admin/deletealldata",(req,res)=>{
    
            res.send("deleted the user");
          });

app.listen(7777,()=>{
    console.log("hiii from server 3000");
});

