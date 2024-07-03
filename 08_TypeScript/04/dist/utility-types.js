"use strict";
// utility types 유틸리티 타입
const product = {}; // 타입의 모든 속성을 선택적으로 들어서 값을 할당하지 않아도 문제가 되지 않는다.
const readonlyUser = {
    // 타입의 모든 속성을 읽기전용으로 바꾼다.
    id: 1,
    name: 'John',
};
const user12 = {
    name: 'Lee',
};
const capitals = {
    'South Korea': 'Seoul',
    'United States': 'Washington D.C.',
    Japan: 'Tokyo',
};
const countryInfo = {
    'South Korea': {
        capital: 'Seoul',
        population: 51000000,
        continent: 'Asia',
    },
    'United States': {
        capital: 'Washington D.C.',
        population: 331000000,
        continent: 'North America',
    },
    Japan: {
        capital: 'Tokyo',
        population: 150000000,
        continent: 'Asia',
    },
};
function someFunction(...param) {
    const [id] = param;
}
someFunction(100);
function saveUser(...params) {
    const [name, age] = params;
}
saveUser('David', 33);
console.log(saveUser);
