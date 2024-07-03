// 04. 유니언(union) 타입

// 유니언 기초
let userId: string | number;

userId = 1;
userId = '100';

// userId = true
// userId = {}

function printUserId(id: string | number) {
    console.log();
}

printUserId('1');
printUserId(1);
// printUserId({});

// type narrowing
function processValue(value: number | string) {
    //  문자열 경우
    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    // 숫자일 경우
    return value.toString().toUpperCase();
}

// 배열 사용 예시
let mixedValue: (string | number)[] = [];

mixedValue.push(1);
mixedValue.push('1');

// 리터럴과 유니언 타입
const toggle = (option: 'on' | 'off') => {
    console.log(option);
};

toggle('on');
toggle('off');

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

// let tShirtSize: Size;

// tShirtSize = 'm';

function setSize(size: Size) {
    switch (size) {
        case 'xs':
            break;
        case 'xl':
            break;
    }
}

// type aliases와 유니언

type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

let responseCode: SuccessCode | ErrorCode;
