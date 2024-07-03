"use strict";
// 04. 유니언(union) 타입
// 유니언 기초
let userId;
userId = 1;
userId = '100';
// userId = true
// userId = {}
function printUserId(id) {
    console.log();
}
printUserId('1');
printUserId(1);
// printUserId({});
// type narrowing
function processValue(value) {
    //  문자열 경우
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    // 숫자일 경우
    return value.toString().toUpperCase();
}
// 배열 사용 예시
let mixedValue = [];
mixedValue.push(1);
mixedValue.push('1');
// 리터럴과 유니언 타입
const toggle = (option) => {
    console.log(option);
};
toggle('on');
toggle('off');
// let tShirtSize: Size;
// tShirtSize = 'm';
function setSize(size) {
    switch (size) {
        case 'xs':
            break;
        case 'xl':
            break;
    }
}
let responseCode;
