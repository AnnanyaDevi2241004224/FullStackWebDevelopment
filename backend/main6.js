import mongoose from "mongoose"
let conn =await mongoose.connect("mongodb://localhost:27017/todo")
import express from "express";
import { Todo } from "./models/Todo.js";
import { title } from "process";
const app=express()
const port=3000
app.get('/',(req,res)=>{
    const todo=new Todo({desc:"mydesc",isDone:false,days:1})
    //  _message: 'Todo validation failed' if days is anytype other than string
    todo.save();
  res.send('hello viratttt sir')
})

app.get('/a',async(req,res)=>{
    let todo= await Todo.findOne({});    
    res.json({title:todo.title,desc:todo.desc});
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
    
  })