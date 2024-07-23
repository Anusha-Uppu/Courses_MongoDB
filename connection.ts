import mongoose from "mongoose";
 async function connection(){
    console.log('Entered');
    const conn= await new Promise<string>((resolve,reject)=>{
        try{
        mongoose.connect("mongodb://localhost/c");
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
// exports.connection=connection;

// async function connection(){
//     try{
//        await mongoose.connect('mongodb://localhost/courses_2');
//        console.log('Connected with the database');
//     }
//     catch(error){
//         console.log('Error while connecting to the database');
//     }
// }
export {connection}