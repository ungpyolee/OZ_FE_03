"use strict";
//  타입스크립트와 비동기
// 비동기 프로그래밍
// Promise - 비동기 작업을 위한 JS 객체
// resolve, reject
const sync = () => {
    console.log('동기 작업');
};
const asyncFn = () => {
    return new Promise((resolve) => {
        resolve('비동기 작업 완료');
    });
};
function main() {
    sync();
    asyncFn().then((value) => console.log(value));
    sync();
    sync();
}
main();
// TS => 제네릭 프로미스
const fetchData = () => {
    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            resolve('data fetch complete');
        }
        else {
            reject('something went wrong ...');
        }
    });
};
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
