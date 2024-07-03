"use strict";
// 인터페이스
const testUser = {
    id: 100,
    name: 'Nathan',
    isPremium: false,
    greet(message) {
        return `${message}, ${this.name}`;
        // console.log('Hello Nathan');
    },
};
testUser.greet('Hello');
const personA = {
    name: 'Eli',
    age: 30,
};
const studentA = {
    name: 'John',
    age: 29,
    studentId: 12345,
    employeeId: 23456,
};
