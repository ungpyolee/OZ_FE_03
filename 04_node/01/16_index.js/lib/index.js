//  index.js로 모아서 exports 하는 방법은 사용하지 않는게 더 좋다.

// module.exports = {
//     request: require('./request'),
//     response: require('./response')
// }

const request = require('./request')
const response = require('./response')

module.exports = {
    send : request.send,
    read : response.read
}