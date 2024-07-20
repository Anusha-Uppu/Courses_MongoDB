import mongoose from "mongoose";
const Courses=new mongoose.Schema({
    name:{
      type:  String,
      required:true,
      minLength:3
    },
    createdAt:{
        type:Date,
        default: ()=>Date.now(),
        immutable:true,
    },
    updatedAt:Date,
    prerequisite:{
      type:  [mongoose.SchemaTypes.ObjectId],
      ref:"Courses"
    }
})
// export default mongoose.model("Courses",Courses);
const CourseSchema=mongoose.model("Courses",Courses);
export {CourseSchema}
