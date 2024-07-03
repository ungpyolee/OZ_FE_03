// DOM

// JS에서 제공되는 모든 DOM API를 그대로 사용
// 타입 정의 파일 제공 'lib.dom.d.ts'

// HTMLElement div, a(anchor), p, head

// <a id="myLink" href="https://google.com"> google </a>

// const link1 = document.getElementById('myLink'); // HTMLElement
// const link2 = document.querySelector('#myLink'); // Element

const link1 = document.getElementById('myLink') as HTMLAnchorElement; // HTMLAnchorElement
const link2 = document.querySelector('#myLink'); // Element

link1.href = 'https://google.com';

if (link2 instanceof HTMLAnchorElement) {
    link2.href = '';
}

const img = document.createElement('img');
img.src = '';

const anchor = document.createElement('a');
anchor.href = '';

const div = document.querySelector('div');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.click();
});

// event
// <div id = "myDiv"></div>

const myDiv = document.getElementById('myDiv');

myDiv?.addEventListener('click', (e: MouseEvent | KeyboardEvent) => {
    // 로직 구현

    // mouse event
    if (e instanceof MouseEvent) {
        const x = e.clientX;
        const y = e.clientY;
    }

    // keyboard event
    if (e instanceof KeyboardEvent) {
        console.log(e.code);
    }
});
