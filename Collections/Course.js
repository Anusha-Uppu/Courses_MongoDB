"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
var mongoose_1 = require("mongoose");
var CourseSchema = new mongoose_1.default.Schema({
    name: String,
    level: String,
    prerequisite: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: "Courses"
        }
    ],
    //   createdAt:{
    //     type:Date,
    //     default: ()=>Date.now(),
    //     immutable:true,
    // },
});
var Courses = mongoose_1.default.model("Courses", CourseSchema);
exports.Courses = Courses;
