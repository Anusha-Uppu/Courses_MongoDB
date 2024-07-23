import mongoose from "mongoose";
const CourseSchema=new mongoose.Schema({
    name:{
      type: String
    }
      ,
    level:{
     type: String
    },
    prerequisite:[{
      type:mongoose.SchemaTypes.ObjectId,
      ref:"Courses"
    }
    ],
  //   createdAt:{
  //     type:Date,
  //     default: ()=>Date.now(),
  //     immutable:true,
  // },
})
const Courses=mongoose.model("Courses",CourseSchema);
export {Courses}
