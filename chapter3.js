// 변수 , 상수 , 리터럴 

// let 키워드 
// ES6 에서 새로 생긴 변수 타입

let currentTempC = 22;

// 초기값 미할당시 Undefined 로 됩니다. 

// 상수 (constant) -> es6에서 새로 생긴 개념 / 변하지 않는 값을 나타냅니다.

const Room_Temp_C = 21.5;

// $ 로 시작 하는 식별자는 보통 JQuery 객체를 나타냅니다 .

// 원시타입 (숫자, 문자열, 불리언 , null, undefined , Symbol) -> 불변 (값이 바뀔수 없다는 말은 아닙니다.)
// 내장 객체 타입 ( Array , Date , RegExp , Map, WeakMap , Set , WeakSet) 등등 

//JS는 16, 10, 8 , 2 진수의 숫자형 리터럴을 인식합니다. 그 외에도 양,음의 무한대 숫자아님등의 특별한 값도 있습니다.
// 어떤 리터럴 형식을 사용하더라도 더블 형식을 제공됩니다.  JS가 표시할 수 있는 숫자형식에는 제한이 있습니다.

const small = Number.EPSILON; // 1에 더했을때 1과 구분되는 결과를 만들수 있는 가장 작은값
const bigInt = Number.MAX_SAFE_INTEGER; // 표현 가능한 가장 큰 정수
const max = Number.MAX_VALUE;  // 표현 가능한 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현 가능한 가장 작은 정수
const min = Number.MIN_VALUE; // 표현 가능한 가장 작은 숫자

const nInf = Number.NEGATIVE_INFINITY; // -무한대
const nan = Number.NaN;   // NaN
const inf = Number.POSITIVE_INFINITY; // 무한대

// 이스케이프 
const doublechar = "큰 따옴표 안에 ' 작은 따옴표";
const singlechar = '작은 따옴표 안에 " 큰 따옴표';

const mixchar = "큰 따옴표 안에 \"  \\( 역슬래쉬 ) 큰 따옴표 쓰기 ";

let currentTemp = 19.5;
// es6 이전 문자열 병합
const message = "The current temperature is" + currentTemp + "\u00b0C";
// 문자열 템플릿 ( 따옴표가 아닌 백틱 ` 을 사용합니다)
const templetmessage = `The current temperature is ${currentTemp} \u00b0C`;

// 심볼 Symbol 유일한 토큰을 나타내기 위한 새 데이터 타입
// 항상 유일합니다.  // 다른 어떤 심볼과도 일치하지 않습니다.

// Symbol() 생성자로 만듭니다. 
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE // FALSE: 심볼은 모두 서로 다릅니다.
// 고유한 식별자가 필요할 때 사용합니다.

// 객체 
const obj = {
    // 프로퍼티 or 멤버
};
obj.color = "yellow";

obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"];  // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

const sam1 = {
    name: 'Sam',
    age: 4,
};

//delete 연산자로 객체에서 프로퍼티를 제거할수 있습니다.

// JS 의 배열 특징
// 1. 배열 크기는 고정 되지 않고 언제든 요소의 추가 제거가 가능합니다.
// 2. 요소의 데이터 타입을 가리지 않습니다. 문자열만 있는배열 , 숫자만 있는 배열 같은 개념이 없습니다.
// 3. 배열은 0부터 시작합니다. 



// 데이터 타입 변환 
// 문자열 -> 숫자로 변경 
// 1. Number 객체 생성자를 사용 
const numStr = "33.3";
const num = Number(numStr);

// 2. parseInt , parseFloat 를 사용합니다. 기수(몇진수인지)를 넘길 수 있습니다.

// toString() 문자열 반환입니다.