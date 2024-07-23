import mongoose from "mongoose";
// import { Error } from "mongoose";
// import { Error } from "cons";
// ";
import bodyParser from "body-parser";
import  {Courses } from "./Collections/Course";
// const express=require('express');
// import express from 'express'
import { connection } from './connection'
// const express=require('express');
import express from 'express';

const app = express();
// import courseRouter from './routers/courses.routes'
const courseRouter=require('./routers/courses.routes')
import { Request,Response } from "express";


app.get('/',async(req:Request,res:Response)=>{
   console.log('------Welcome to the Courses Application------')
   try{
    const result:any=await Courses.find();
    // res.json(result.map(a=>a.toJSON()));
    // res.json(result);
   return res.json(result);
  }catch(error){
    console.log('Error')
  }
   
})
connection();
async function run(){
    try{
        // const _id1=new mongoose.Schema.ObjectId('669a5431b500b8455fcb9a49')
    // const course=await CourseSchema.create(
    //     {
    //     name:"MPC",
    //      prerequisite:['669a5431b500b8455fcb9a49']
    //     })
        // console.log()
    const courses=await Courses.where('name').equals('CSE');
    console.log(courses);
    // console.log(course);
    const result=await Courses.find();
    console.log("resiult"+result);
    }
    catch(e:any){
        console.log(e.message)
    }
}
run();
app.use(bodyParser.json);

app.listen('3000',()=>{
    console.log('Server is running on p[ort 3000');
})
app.use('/course',courseRouter);