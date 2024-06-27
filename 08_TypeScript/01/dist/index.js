"use strict";
// console.log('Hello TypeScript');
// const nums: number[] = [];
// const a = 10 + nums[0];
// const someString = 'typescript!';
// someString.endsWith('!');
// import { printName } from './util';
// printName('typescript');
// 문자열 (String)
const a = '';
const b = '';
const c = ``;
let myName = 'Steve';
let message = `Hello ${myName}`;
myName.toLocaleUpperCase();
// message = 123 - string 타입이 아닌 숫자로 대체할 수 없다.
// 숫자 타입 (number)
let n = 100;
// n = "100" - number 타입이아닌 문자열로 대체할 수 없다.
// n.toUpperCase(); - number타입의 변수에 string값의 함수를 적용할 수 없다.
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = infinity;
let iAmNotNumber = NaN;
// 불리언 (boolean)
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log('hello we are open');
}
if (!isCompleted) {
    console.log('Job not complete');
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null 널 타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login('Joy');
logout();
