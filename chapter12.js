// 이터레이터  , 제네레이터 

// 이터레이터는 '지금 어디 있는지' 파악을 돕는 일종의 책갈피 같은 개념

const book = [
    "Twinkle , twinkle , little bat",
    "How I Wonder what you're at!",
];

const it = book.values();

it.next(); //  "Twinkle , twinkle , little bat",
it.next(); //  "How I Wonder what you're at!",

// 두 개의 이터레이터는 서로 독립적이며 같은 배열에서 따로따로 움직일 수 있습니다 .

class Log{
    constructor() {
        this.message = [];
    }
    add (message) {
        this.message.push({message , timestamp: Date.now()});
    }
    // Log 인스턴스를 배열 처럼 순회할 수 있습니다. 
    [Symbol.iterator]() {
        return this.message.values();
    }
}
// 제네레이터 / 이터레이터를 이용하여 자신의 실행을 제어하는 함수 
    // 1. 함수의 실행을 개별적으로 나눔으로써 함수의 실행을 제어
    // 2. 실행중인 함수와 통신이 가능함

// 언제든 호출자에게 제어권을 넘길 수 있습니다.
// 호출즉시 실행되지 않고 이터레이터를 반환후에 next 메서드를 호출함에 따라 실행됩니다.

function * rainbow() {

    //return 이외에 yield 사용가능 
    yield 'red';
    yield 'orange';
}
// 제네레이터는 => 화살표함수 표기법으로 만들 수 없고 반드시 function* 로 해야합니다 .

// 제네레이터를 호출하면 이터레이터를 얻습니다.
const it = rainbow();

it.next(); // red
it.next(); // orange


// yield 문은 제네레이터의 마지막 문이라도 끝내지 않습니다.
// return을 사용해야 done -> true 로 바뀌고 반환하는 값이 됩니다.
// 제네레이터 에서 중요한 값을 return 으로 반환하지 않는것이 좋습니다. 

