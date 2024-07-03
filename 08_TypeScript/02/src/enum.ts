// Enum 열거형

// 기본 문법

// enum 이름 {
//     상수값1,
//     상수값2,
//     상수값3
// }

// 숫자형 Enum

enum PlayerState {
    Buffering,
    Playing,
    Paused,
    Seeking,
}

let currnetState: PlayerState;

currnetState = PlayerState.Buffering;

const isPlaying = (state: PlayerState) => {
    return state === PlayerState.Playing;
};

// 플레이어 재생중?
isPlaying(currnetState);

// 문자형 Enum

enum Direction {
    Left = 'LEFT',
    Right = 'RIGHT',
    Up = 'UP',
    Down = 'DOWN',
}

function move(dir: Direction) {
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
