import { CourseSchema } from "../Collections/Course";

const express=require('express');
const router=express.Router();
import {Request, Response} from 'express';
// const Request=require('express');
// const Response=require('express');

router.get('/', async(req:Request,res:Response)=>{
  try{
    const result:any=await CourseSchema.find();
    // res.json(result.map(a=>a.toJSON()));
    // res.json(result);
   return res.json(result);
  }catch(error){
    console.log('Error')
  }
})

module.exports=router