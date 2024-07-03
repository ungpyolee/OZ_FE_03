"use strict";
// Enum 열거형
// 기본 문법
// enum 이름 {
//     상수값1,
//     상수값2,
//     상수값3
// }
// 숫자형 Enum
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Buffering"] = 0] = "Buffering";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Paused"] = 2] = "Paused";
    PlayerState[PlayerState["Seeking"] = 3] = "Seeking";
})(PlayerState || (PlayerState = {}));
let currnetState;
currnetState = PlayerState.Buffering;
const isPlaying = (state) => {
    return state === PlayerState.Playing;
};
// 플레이어 재생중?
isPlaying(currnetState);
// 문자형 Enum
var Direction;
(function (Direction) {
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
function move(dir) {
    switch (dir) {
        case Direction.Left:
            // 왼쪽 로직
            break;
        case Direction.Right:
            // 오른쪽 로직
            break;
    }
}
move(Direction.Left);
move(Direction.Right);
