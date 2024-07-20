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
const mongoose_1 = __importDefault(require("mongoose"));
// import { Error } from "mongoose";
// import { Error } from "cons";
// ";
const Course_1 = require("./Collections/Course");
// const express=require('express');
// import express from 'express'
const express = require('express');
const app = express();
app.listen('3000', () => {
    console.log('Server is running on p[ort 3000');
});
app.get('/', (req, res) => {
    console.log('------Welcome to the Courses Application------');
});
function connection() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Entered');
        const conn = yield new Promise((resolve, reject) => {
            try {
                mongoose_1.default.connect("mongodb://localhost/courses");
                resolve('Connected');
            }
            catch (error) {
                reject(error);
            }
        }).then((value) => {
            console.log(value);
        }).catch((error) => {
            console.log("Data base connection is failed cause of " + error);
        });
        // console.log(conn);
    });
}
connection();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const _id1=new mongoose.Schema.ObjectId('669a5431b500b8455fcb9a49')
            const course = yield Course_1.CourseSchema.create({
                name: "MPC",
                prerequisite: ['669a5431b500b8455fcb9a49']
            });
            console.log(course);
        }
        catch (e) {
            console.log(e.message);
        }
    });
}
run();
