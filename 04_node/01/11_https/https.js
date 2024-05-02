const {send} = require('./request')
const {read} = require('./response')

function makeRequest(url, data){
    // 요청을 보내기 - 암호화
    send(url, data);
    // 데이터를 return하기 - 복호화
    return read();
}

const responseData = makeRequest('https://naver.com', 'any data');
console.log(responseData);