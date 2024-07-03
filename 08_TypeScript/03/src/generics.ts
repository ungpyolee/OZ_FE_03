// generics 제네릭

// <T>
// function genericFunction<T>(arg: T): T {
//     return arg;
// }

// interface GenericInterface<T> {}

// class GenericClass<T> {}

// Array<string>
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ['1', '2', '3', '4'];

let div = document.querySelector<HTMLDivElement>('#myDiv1');
let button2 = document.querySelector<HTMLButtonElement>('#myButton2');

button2?.click();

function getFirstElement<T>(arr: T[]): T | undefined {
    if (!arr.length) {
        return undefined;
    }

    return arr[0];
}

// function getFirstStringElement(arr: string[]) {
//     if (!arr.length) {
//         return undefined;
//     }

//     return arr[0];
// }

const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
// const firstString = getFirstStringElement(strings);

interface Dict<T> {
    [key: string]: T;
}

interface Entry<K, V> {
    key: K;
    value: V;
}

let entry: Entry<string, number> = {
    key: 'age',
    value: 30,
};

let entry2: Entry<number, string[]> = {
    key: 1,
    value: ['red', 'green', 'blue'],
};
// interface strDict {
//     [key: string]: string;
// }

let strObj: Dict<string> = {
    name: 'Elliot',
};

// interface numDict {
//     [key: string]: number;
// }

let numObj: Dict<number> = {
    age: 30,
};
