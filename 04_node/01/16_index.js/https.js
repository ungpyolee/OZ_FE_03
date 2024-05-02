const lib = require('./lib')

function makeRequest(url, data){
    // 요청을 보내기 - 암호화
    lib.request.send(url, data);
    // 데이터를 return하기 - 복호화
    return lib.response.read();
}

const responseData = makeRequest('https://naver.com', 'any data');
// console.log(responseData);

console.log(require.cache)