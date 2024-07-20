"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Courses = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
    prerequisite: {
        type: [mongoose_1.default.SchemaTypes.ObjectId],
        ref: "Courses"
    }
});
// export default mongoose.model("Courses",Courses);
const CourseSchema = mongoose_1.default.model("Courses", Courses);
exports.CourseSchema = CourseSchema;
