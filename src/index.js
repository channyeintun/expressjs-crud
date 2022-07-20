const express=require("express");
const helloRouter=require("./helloRouter");

const app=express();

app.all("/",function(req,res,next){
      console.log('some test')
      next();
})

app.use("/hello",helloRouter);

app.use((req,res,next)=>{
      console.log('logger middleware');
      next();
})

app.use(express.json());

app.use(express.urlencoded({extended:false}));



app.get("/",function (req,res){
      res.status(200).send("Hello world");
})

app.get("/todos",function (req,res){
      res.status(200).send(JSON.stringify([{title:"some text"}]));
})

app.get("/todos/:todoId",function (req,res){
      const {todoId}=req.params;
      res.status(200).send(JSON.stringify({id:todoId,title:"some text"}));
})

app.use((req,res,next)=>{
      res.status(404).send("Not Found");
})

app.listen(3000,()=>{
      console.info("Listening on port 3000");
})