"use strict";
// advanced types
// 교차 타입 (intersection type)
const person = {
    name: 'John',
    age: 33,
};
const guest = {
    id: 100,
    name: 'Paul',
};
const user = {
    id: 123,
    email: 'test@email.com',
    name: 'K',
    age: 30,
};
function getProp(obj, key) {
    return obj[key];
}
const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, 'y'); //20 반환
