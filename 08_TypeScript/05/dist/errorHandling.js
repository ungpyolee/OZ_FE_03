"use strict";
// 에러 처리 Error handling
// try {
//     // 에러가 발생할 수 있는 코드
// } catch (error){
//     // 에러를 처리하는 곳
//     console.error(error.message);
// } finally {
//     // 항상 실행 된다.
// }
function checkPositiveNumber(num) {
    if (num < 0) {
        // 예외 발생
        throw new Error('number should be positive');
    }
    console.log(`${num} is a positive number`);
}
try {
    checkPositiveNumber(10);
    checkPositiveNumber(-10);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('An unexpected error occurred');
    }
}
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}
try {
    throw new CustomError('custom error...');
}
catch (error) {
    if (error instanceof CustomError) {
        console.error(error.message);
    }
}
