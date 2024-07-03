// const assertion 상수 단언

// 객체
// const book = {
//     title: 'Typescript Guide',
//     author: 'cording moon',
// } as const;

// // book.title = "author title"; 읽기전용이라 값 할당 x

// // 배열
// const nums = [1, 2, 3, 4, 5] as const;

// // nums.push(6); 읽기전용이라 값 추가 x

const config = {
    server: 'https://api.somedomain.com',
    port: 8080,
    version: 2,
} as const;

// config.server = "https:"

// 주문 시스템의 상태 정보
const statusCodeMap = {
    101: 'ordered',
    102: 'pending',
    103: 'completed',
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
    const message = statusCodeMap[statusCode];

    // UI 업데이트 또는 로직처리
}
