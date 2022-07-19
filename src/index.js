const express=require("express");

const app=express();

app.get("/",function (req,res){
      res.send("Hello world");
})

app.listen(3000,()=>{
      console.info("Listening on port 3000");
})