// import fs from 'fs';
// import csvParser from 'csv-parser';
// const fs=require('fs');

import * as fs from "fs";
// const csvParser=require('csv-parser');
// import { CsvParser } from 'csv-parser';
import { parse } from 'csv-parse';
import {connection} from'./connection'
import { Courses } from './Collections/Course';
import { error } from 'console';

type Course_list={
 name:string,
 level:string,
 prerequisite:[string]
}

const result_array:Course_list[]=[];
console.log('REsult array before:'+result_array);
async function main(){
    await connection();
        fs.createReadStream('./Coursesdata - Sheet1.csv',
            {encoding: 'utf-8'}
         ).pipe(parse())
        .on('data',async function(row:any){
             
             result_array.push(row);
             console.log("Row"+row);
             console.log('---In the Data---');
             console.log('result array after:'+result_array);
        }).on('end',async function(){
            console.log('----In the end----');
           const val={
            name:result_array[0].name,
            level:result_array[0].level
           }
           console.log(result_array+'again result array');
            // await Courses.create(result_array[0]);
            const cc=new Courses(result_array[0]);
            console.log(cc);
            console.log('length:'+result_array.length);
            console.log('value at 0 index:'+result_array[0]);
            console.log('Type of the Resut:'+typeof result_array);
            console.log(Object.keys(result_array[0]));
            const vall=result_array[0];

            console.log('name:'+vall.name);
            console.log('level:'+vall.level);
        }).on('error',()=>{
            console.log(error);
        })
        // fs.close('Coursesdata - Sheet1.csv');
}
main();