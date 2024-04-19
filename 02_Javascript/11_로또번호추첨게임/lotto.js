const todaySpan = document.querySelector("#today");
const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");


let lottoNumbers = []

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일`


function paintNumber(number) {
    const eachNumDiv = document.createElement('div');
    eachNumDiv.classList.add("eachnum");
        eachNumDiv.textContent = number;
        numbersDiv.append(eachNumDiv);
}


// 클릭하면 랜덤숫자 여섯개가 배열이 추가된다!
drawButton.addEventListener('click', function () {
    if(lottoNumbers.length === 6){
        lottoNumbers.splice(0, 6);
        numbersDiv.innerHTML = ""

    }
    while (lottoNumbers.length < 6) {
        let rn = Math.floor(Math.random() * 45) + 1

        if (lottoNumbers.indexOf(rn) === -1) {
            lottoNumbers.push(rn);
            paintNumber(rn);
        }
    }
    // lottoNumbers.splice(0, 6);
})


resetButton.addEventListener('click', function () {
    lottoNumbers.splice(0, 6);
    numbersDiv.innerHTML = ""
})