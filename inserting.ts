import {connection} from './connection'
// import fs from 'fs';
// import csvParser from 'csv-parser';
const fs=require('fs');
const csvParser=require('csv-parser');
const csv=require('fast-csv');
import mongoose from 'mongoose';

import { Courses } from './Collections/Course';
type Courses_list={
   name:string,
   level:string,
   prerequisite:[string],
}
const result_array: Courses_list[]=[];
async function main(){
 await connection();
 run();
}
main();
// const {buffer}='./Cour'
let count:number=0;

function run(){
    console.log("----Entered------");
try{
    console.log('----In the Try------');
    fs.createReadStream("./Coursesdata - Sheet1.csv", 
        {encoding: 'utf-8'})
    //.pipe(csvParser())
    .on('data',async function(row:any){
      result_array.push(row.toJSON);
      console.log('cyesssss');
      console.log(result_array);
    }).on('end',async()=>{
        console.log('----In the end-----');
         
       try{
      

            console.log("Yes It is SSC");
          await Courses.insertMany(result_array);
       
         result_array.forEach((element:Courses_list) =>{
            if(element.prerequisite==null){
          
            }
            else{
               element.prerequisite.forEach(ele => {
                   const id=Courses.findOne({name:ele});
                   console.log(id);
               });
            }
         })
      
       }catch(error){
        console.log('-----In the Error----');
        console.log("Error");
       }
    }
)

}catch(error:any){
    console.log(error.message)
}
}
// fs.close();

