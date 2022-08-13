const express=require("express");
const app=express();

app.get("/",function(req,res){
res.send("<h1>Hello, World!</h1>");
})

app.get("/contact",function(req,res){
res.send("Contact me at nikithay0200@gmail.com");
})

app.get("/about",function(req,res){
res.send("My name is Nikitha Yellur");
})

app.get("/hobbies",function(req,res){
res.send("<ul><li>Coffee</li><li>Beer</li><li>Juice</li></ul>");
})

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
