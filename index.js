"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Error } from "mongoose";
// import { Error } from "cons";
// ";
const body_parser_1 = __importDefault(require("body-parser"));
const Course_1 = require("./Collections/Course");
// const express=require('express');
// import express from 'express'
const connection_1 = require("./connection");
const express = require('express');
const app = express();
// import courseRouter from './routers/courses.routes'
const courseRouter = require('./routers/courses.routes');
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('------Welcome to the Courses Application------');
    try {
        const result = yield Course_1.Courses.find();
        // res.json(result.map(a=>a.toJSON()));
        // res.json(result);
        return res.json(result);
    }
    catch (error) {
        console.log('Error');
    }
}));
(0, connection_1.connection)();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const _id1=new mongoose.Schema.ObjectId('669a5431b500b8455fcb9a49')
            // const course=await CourseSchema.create(
            //     {
            //     name:"MPC",
            //      prerequisite:['669a5431b500b8455fcb9a49']
            //     })
            // console.log()
            const courses = yield Course_1.Courses.where('name').equals('CSE');
            console.log(courses);
            // console.log(course);
            const result = yield Course_1.Courses.find();
            console.log("resiult" + result);
        }
        catch (e) {
            console.log(e.message);
        }
    });
}
run();
app.use(body_parser_1.default.json);
app.listen('3000', () => {
    console.log('Server is running on p[ort 3000');
});
app.use('/course', courseRouter);
