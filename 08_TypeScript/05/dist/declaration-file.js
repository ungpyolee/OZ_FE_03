"use strict";
// 타입 선언/정의 파일
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('hello typescript');
// console.print('hello');
const lodash_1 = __importDefault(require("lodash"));
let max = lodash_1.default.max([3, 5, 6, 7, 8, 2]);
console.log(max);
let shuffledArray = lodash_1.default.shuffle([12, 5, 2, 74]);
console.log(shuffledArray);
