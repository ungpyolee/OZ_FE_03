// Tuple 튜플

// 기본 문법
let myTuple: [string, number, boolean];

myTuple = ['Hello', 15, false]; // Ok
// myTuple = [ 15, "Hello", false]; // 처음 정의할 때 string, number, boolean 순서로 정했기 떄문에 순서를 지켜야한다.

// 사용 예시 1
function getUserInfo(): [number, string] {
    return [1, 'Sam'];
}

const [userid, username] = getUserInfo();

// 사용 예시 2
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price];

const vanila: IceCream = ['Vanila', 500];

vanila[0];
vanila[1];

// 사용 예시 3
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -95]);
coords.push([36, -85]);

for (const [lat, lng] of coords) {
    console.log(lat, lng);
}
