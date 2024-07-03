"use strict";
// generics 제네릭
// <T>
// function genericFunction<T>(arg: T): T {
//     return arg;
// }
// interface GenericInterface<T> {}
// class GenericClass<T> {}
// Array<string>
let numbers = [1, 2, 3, 4, 5];
let strings = ['1', '2', '3', '4'];
let div = document.querySelector('#myDiv1');
let button2 = document.querySelector('#myButton2');
button2 === null || button2 === void 0 ? void 0 : button2.click();
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// function getFirstStringElement(arr: string[]) {
//     if (!arr.length) {
//         return undefined;
//     }
//     return arr[0];
// }
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
let entry = {
    key: 'age',
    value: 30,
};
let entry2 = {
    key: 1,
    value: ['red', 'green', 'blue'],
};
// interface strDict {
//     [key: string]: string;
// }
let strObj = {
    name: 'Elliot',
};
// interface numDict {
//     [key: string]: number;
// }
let numObj = {
    age: 30,
};
