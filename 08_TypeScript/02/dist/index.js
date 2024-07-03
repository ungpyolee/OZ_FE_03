"use strict";
// 01. 배열 타입
let nums = [1, 2, 3, 4, 5]; // 숫자만 허용
let strs = ['a', 'b', 'c']; // 문자열만 허용
let bools = [false, false, true]; // boolean만 허용
// nums.push(6);
// nums.push(7);
// nums.push("8") - 문자열 타입을 숫자열 배열에 대입할 수 없다.
// nums[0] = "1" - 문자열 "1"을 숫자열 배열에 대입할 수 없다
// let nums: Array<number> = [1,2,3,4,5]
// let strs: Array<string> = ["a", "b", "c"]
// bools.push(true)
// for (const str of strs) {
// }
// 02. 객체 타입
{
    // property_name: property_type
}
// 타입 명시
// let monitor: { brand: string; price: number };
// monitor.brand = 'LG'; - monitor 객체의 변수가 값을 할당 받기전에 사용될 수 없다.
// monitor.price = 120;
// monitor = {
//     brand: 'LG',
//     price: 120,
// };
// monitor.displaySize = "27inch"; - displaySize는 정의한 적이없는 객체 타입이다.
// let car : { make: string, model: string, year: number}
// car = {
//     make: "Hyundai",
//     model: "SONATA",
//     year: 2024
// }
// 타입 추론
let monitor = {
    brand: 'LG', // string
    price: 120, // number
}; // 변수의 타입을 지정하지 않았지만 타입 추론으로 타입을 지정했다.
// Optional property
// let user: { id: string; name: string; age?: number }; // age에 ?를 사용하여 선택사항을 표시했다.
// user = {
// id: '1234',
// name: 'John',
// }; // age에 값을 할당하지 않아도 오류가나지 않는다.
// Readonly property
let user; // readonly 프로퍼티를 사용한 변수는 변경할 수 없다.
user = {
    id: '1234',
    name: 'John',
};
// user.name = 'John Smith';
// user.id = '5678'; // readonly 변수를 변경하는데 실패.
let apiConfig;
let user1 = {
    id: '1',
    name: 'Johm',
    age: 20,
};
let user2 = {
    id: '1',
    name: 'Sarah',
    age: 30,
};
let users = [];
users.push(user1);
users.push(user2);
const payload = {
    timestamp: 1234523,
    type: 'event',
    user: {
        id: '123',
        isActive: true,
        email: ['test1@email.com', 'test2@email.com'],
    },
};
// 함수 타입
// Parameter
function add(x, y) {
    return x + y;
}
const result = add(10, 5);
// Parameter II
// function addToCart(name: string, price: number, quantity: number) {
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart('orange', 100, 5);
// Default Parameter
// function addToCart(name: string, price: number, quantity: number = 1) { // 갯 수의 값을 기본으로 1을 할당 해준다.
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart('orange', 100); // 갯 수의 값을 할당하지 않아도 기본으로 1이 할당되어 있어서 문제가되지 않는다. return `orange, 100, 1`
// optional parameter
function addToCart(name, price, quantity) {
    // 갯 수의 값은 옵션으로 있거나 없어도 된다.
    return `${name}, ${price}, ${quantity}`; // quantity 받은 값 또는 undefind
    // return `${name}, ${price}, ${quantity || 1}`;  //  받은 값 또는 1
}
addToCart('orange', 100); //갯 수의 값은 옵션으로 없어도 문제가되지 않는다. return `orange, 100, undefind`
// Contexual Typing 문맥상 타입핑
const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c', 'd', 'e'];
numbers.map((element) => {
    // element. 함수를 사용하는 대상인 배열의 타입에 맞춰 메서드를 제공하여 미리 오류를 방지한다.
});
// Return type annoatation
function addTwoValues(x, y) {
    return `${x}${y}`;
}
function addTwoNumbers(x, y) {
    return x + y;
}
function isTen(x, y) {
    return x + y === 10;
}
// void, nerver
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
