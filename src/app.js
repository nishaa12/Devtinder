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


//Route handlers
 app.use("/user",
    (req,res,next)=>{
    console.log("route handler 1");
    //res.send("response1");
    next();
   // res.send("response1");
},
(req,res,next)=>{
    console.log("route handler from user 2");
    //res.send("response2");
    next();
},
(req,res,next)=>{
    console.log("route handler from user 3");
  res.send("response3");
}

);

app.listen(7777,()=>{
    console.log("hiii from server 3000");
});