const adminauth=(req,res,next)=>{
    const token="xyz";
     const isadminauth =token==="xyz";
     if(!isadminauth){ 
         res.status(401).send("unauthorized request")}
         else{
    next();
};

};


     module.exports={
        adminauth
     };