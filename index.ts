import mongoose from "mongoose";
// import { Error } from "mongoose";
// import { Error } from "cons";
// ";
import  {CourseSchema } from "./Collections/Course";
// const express=require('express');
// import express from 'express'
const express=require('express');
const app=express();
app.listen('3000',()=>{
    console.log('Server is running on p[ort 3000');
})
app.get('/',(req:Request,res:Response)=>{
   console.log('------Welcome to the Courses Application------')
   
})
async function connection(){
    console.log('Entered');
    const conn=await new Promise<string>((resolve,reject)=>{
        try{
        mongoose.connect("mongodb://localhost/courses");
        resolve('Connected');
        }catch(error){
          reject(error)
        }
       
    }).then((value:string)=>{
        console.log(value);
    }).catch((error:Error)=>{
        console.log("Data base connection is failed cause of "+error);
    })
    // console.log(conn);
   
}
connection();
async function run(){
    try{
        // const _id1=new mongoose.Schema.ObjectId('669a5431b500b8455fcb9a49')
    const course=await CourseSchema.create(
        {
        name:"MPC",
         prerequisite:['669a5431b500b8455fcb9a49']
        })
    console.log(course);
    }
    catch(e:any){
        console.log(e.message)
    }
}
run();