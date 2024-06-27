// console.log('Hello TypeScript');

// const nums: number[] = [];

// const a = 10 + nums[0];

// const someString = 'typescript!';

// someString.endsWith('!');

// import { printName } from './util';

// printName('typescript');

// 문자열 (String)

const a: string = '';
const b: string = '';
const c: string = ``;

let myName: string = 'Steve';
let message: string = `Hello ${myName}`;

myName.toLocaleUpperCase();

// message = 123 - string 타입이 아닌 숫자로 대체할 수 없다.

// 숫자 타입 (number)

let n: number = 100;

// n = "100" - number 타입이아닌 문자열로 대체할 수 없다.
// n.toUpperCase(); - number타입의 변수에 string값의 함수를 적용할 수 없다.

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = infinity;
let iAmNotNumber: number = NaN;

// 불리언 (boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
    console.log('hello we are open');
}

if (!isCompleted) {
    console.log('Job not complete');
}

// && || !
let isAvailable: boolean = isOpen && !isCompleted;

// null 널 타입

let user: string | null = null;

function login(userName: string) {
    user = userName;
}

function logout() {
    user = null;
}

login('Joy');
logout();
