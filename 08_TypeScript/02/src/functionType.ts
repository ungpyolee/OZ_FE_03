// 03. 함수 타입

// Parameter
function add(x: number, y: number): number {
    return x + y;
}

const result = add(10, 5);

// Parameter II
// function addToCart(name: string, price: number, quantity: number) {
//     return `${name}, ${price}, ${quantity}`;
// }

// addToCart('orange', 100, 5);

// Default Parameter
// function addToCart(name: string, price: number, quantity: number = 1) { // 갯 수의 값을 기본으로 1을 할당 해준다.
//     return `${name}, ${price}, ${quantity}`;
// }

// addToCart('orange', 100); // 갯 수의 값을 할당하지 않아도 기본으로 1이 할당되어 있어서 문제가되지 않는다. return `orange, 100, 1`

// optional parameter
function addToCart(name: string, price: number, quantity?: number) {
    // 갯 수의 값은 옵션으로 있거나 없어도 된다.
    return `${name}, ${price}, ${quantity}`; // quantity 받은 값 또는 undefind
    // return `${name}, ${price}, ${quantity || 1}`;  //  받은 값 또는 1
}

addToCart('orange', 100); //갯 수의 값은 옵션으로 없어도 문제가되지 않는다. return `orange, 100, undefind`

// Contexual Typing 문맥상 타입핑

const numbers: number[] = [1, 2, 3, 4, 5];
const letters: string[] = ['a', 'b', 'c', 'd', 'e'];

numbers.map((element) => {
    // element. 함수를 사용하는 대상인 배열의 타입에 맞춰 메서드를 제공하여 미리 오류를 방지한다.
});

// Return type annoatation
function addTwoValues(x: number, y: number): string {
    return `${x}${y}`;
}

function addTwoNumbers(x: number, y: number): number {
    return x + y;
}

function isTen(x: number, y: number): boolean {
    return x + y === 10;
}

// void, nerver

function logMessage(message: string): void {
    console.log(message);
}

function throwError(message: string): never {
    throw new Error(message);
}
