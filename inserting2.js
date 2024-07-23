"use strict";
// import fs from 'fs';
// import csvParser from 'csv-parser';
// const fs=require('fs');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// const csvParser=require('csv-parser');
// import { CsvParser } from 'csv-parser';
var csv_parse_1 = require("csv-parse");
var connection_1 = require("./connection");
var Course_1 = require("./Collections/Course");
var console_1 = require("console");
var result_array = [];
console.log('REsult array before:' + result_array);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, connection_1.connection)()];
                case 1:
                    _a.sent();
                    fs.createReadStream('./Coursesdata - Sheet1.csv', { encoding: 'utf-8' }).pipe((0, csv_parse_1.parse)())
                        .on('data', function (row) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                result_array.push(row);
                                console.log("Row" + row);
                                console.log('---In the Data---');
                                console.log('result array after:' + result_array);
                                return [2 /*return*/];
                            });
                        });
                    }).on('end', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var val, cc, vall;
                            return __generator(this, function (_a) {
                                console.log('----In the end----');
                                val = {
                                    name: result_array[0].name,
                                    level: result_array[0].level
                                };
                                console.log(result_array + 'again result array');
                                cc = new Course_1.Courses(result_array[0]);
                                console.log(cc);
                                console.log('length:' + result_array.length);
                                console.log('value at 0 index:' + result_array[0]);
                                console.log('Type of the Resut:' + typeof result_array);
                                console.log(Object.keys(result_array[0]));
                                vall = result_array[0];
                                console.log('name:' + vall.name);
                                console.log('level:' + vall.level);
                                return [2 /*return*/];
                            });
                        });
                    }).on('error', function () {
                        console.log(console_1.error);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
