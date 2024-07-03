// Type Assertion 타입 단언

// 표현식  as 지정할 타입

const someValue: unknown = 'Hey there';

// string타입이아닌 unknown타입인 상태로 length 메서드를 사용할 수 없다.
// const len = someValue.length

// as 지정타입을 string으로 지정해주어 length 메서드 사용 가능
const len = (someValue as string).length;

// HTMLElement라는 타입을 갖게 된다.
// const button = document.getElementById('button');

// as 지정할 타입으로 HTMLButtonElement의 타입을 갖아 disabled의 속성을 사용할 수 있게된다.
const button = document.getElementById('button') as HTMLButtonElement;

// 안전하게 속성에 접근하기 위해 button elemennt가 존재하는지 확인하는 절차가 있는것이 좋다.
if (button instanceof HTMLButtonElement) {
    button.disabled = false;
}
if (button) {
    button.disabled = false;
}
