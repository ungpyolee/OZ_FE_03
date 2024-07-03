"use strict";
// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐: 선형 자료구조, FIFO(first-in-first-out)
class GenericQueue {
    constructor() {
        this.items = [];
    }
    // enqueue 메서드 ( 큐를 데이터에 추가 )
    enqueue(item) {
        this.items.push(item); // 맨 뒤에 데이터를 추가한다.
    }
    // dequeue 메서드 ( 큐의 맨처음 데이터를 꺼낸다 )
    dequeue() {
        return this.items.shift(); // 맨처음 데이터를 꺼내서 배열에서 없어진다.
    }
    // peek 메서드 ( 큐의 맨처음 데이터를 확인 )
    peek(i) {
        return this.items[i]; // 맨처음 데이터를 확인만하고 그대로 있다.
    }
    // size 메서드 ( 현재 큐의 사이즈 반환 )
    size() {
        return this.items.length;
    }
}
const stringQ = new GenericQueue();
stringQ.enqueue('Hello');
console.log(stringQ.peek(0));
stringQ.dequeue();
stringQ.enqueue('Typescript');
stringQ.enqueue('React.js');
stringQ.enqueue('Javascript');
stringQ.enqueue('Next.js');
console.log(stringQ.size());
console.log(stringQ.peek(2));
const numberQ = new GenericQueue();
numberQ.enqueue(3);
console.log(numberQ.peek(0));
numberQ.dequeue();
console.log(numberQ.size());
