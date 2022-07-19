const express=require("express");

const app=express();

app.all("/",function(req,res,next){
      console.log('middleware')
      next();
})

app.get("/",function (req,res){
      res.send("Hello world");
})

app.get("/todos",function (req,res){
      res.send(JSON.stringify([{title:"some text"}]));
})

app.get("/todos/:todoId",function (req,res){
      const {todoId}=req.params;
      res.send(JSON.stringify({id:todoId,title:"some text"}));
})

app.listen(3000,()=>{
      console.info("Listening on port 3000");
})