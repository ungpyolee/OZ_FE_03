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
let user: { readonly id: string; name: string; age?: number }; // readonly 프로퍼티를 사용한 변수는 변경할 수 없다.

user = {
    id: '1234',
    name: 'John',
};

// user.name = 'John Smith';
// user.id = '5678'; // readonly 변수를 변경하는데 실패.

let apiConfig: {
    //변경되면 안되는 값들을 readonly 프로퍼티를 사용하여 변경되지 않도록 한다.
    readonly clientKey: string;
    readonly Url: string;
};

// 타입 별칭 ( Type Alias )
type UserType = {
    id: string;
    name: string;
    age: number;
};

let user1: UserType = {
    id: '1',
    name: 'Johm',
    age: 20,
};

let user2: UserType = {
    id: '1',
    name: 'Sarah',
    age: 30,
};

let users: UserType[] = [];

users.push(user1);
users.push(user2);

// Nested 객체 ( 중첩 객체 )

type Payload = {
    timestamp: number;
    type: string;
    user: {
        id: string;
        isActive: boolean;
        email: string[];
    };
};

const payload: Payload = {
    timestamp: 1234523,
    type: 'event',
    user: {
        id: '123',
        isActive: true,
        email: ['test1@email.com', 'test2@email.com'],
    },
};
