"use strict";
// Type Narrowing 타입 좁히기
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let id = 1;
if (typeof id === 'string') {
    // 문자열 ID일 경우 로직 처리
}
function getId(id) {
    if (typeof id === 'number') {
        return id;
    }
    return Number(id);
}
getId(1);
getId('1');
function power(option) {
    if (option === 'off') {
        console.log('power off');
    }
    else {
        console.log('power on');
    }
}
power('on');
power('off');
function sendMessage(os) {
    if ('iMessage' in os) {
        os.iMessage(); // iOS로 좁혀진다
    }
    else {
        os.message(); // android 케이스
    }
}
sendMessage({
    iMessage: () => {
        console.log('sending iMessage');
    },
});
sendMessage({
    message: () => {
        console.log('sending Message');
    },
});
// instanceof narrowing
class ApiResponse {
}
class ErrorResponse {
    constructor() {
        this.message = '';
    }
}
function handleApiResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response instanceof ApiResponse) {
            // 데이터 처리
        }
        else if (response instanceof ErrorResponse) {
            // 에러 처리
        }
    });
}
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();
handleApiResponse(apiResponse);
handleApiResponse(errorResponse);
// 타입 가드(type predicates)
function isErrorResponse(response) {
    return response.message !== undefined;
}
const response = { message: 'error ...' };
if (isErrorResponse(response)) {
    // 에러 케이스
    console.log(response.message);
}
function handleResponse(response) {
    if (response.type === 'success') {
        console.log('data: ', response.data); // 올바른 속성: data
    }
    else {
        console.log(response.message);
    }
}
