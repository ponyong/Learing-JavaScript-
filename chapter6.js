function sayHello() {

    console.log("Hello");
}

sayHello();

// return 값을 명시하지 않으면 기본 값은 undefined 가 됩니다.

sayHello() // 호출
sayHello; // 참조

// 함수를 변수로 할당하여 다른 이름으로 호출 가능합니다.

const f = sayHello;

// 함수를 객체의 프로퍼티에 할당하는 것도 가능합니다.

const n = {};
n.f = sayHello;
n.f();

// 함수를 배열 요소로 할당하는것도 가능합니다.

const arr = [1,2,3];
arr[1] = sayHello;
arr[1]();

// ★ 매개변수가 함수를 결정하지 않는다
// C에서 f(x) f() f(x,y) 가 다른 함수 이지만 JS 에서는 매개변수가 함수호출에 영향을 미치지 않는다.
// 암시적으로 제공하지 않은값은 undefined 할 뿐입니다.

// 6.3.2 매개변수 해체
function getSentence ({subject , verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "Love",
    object: "You",
};

getSentence(o);

// 배열도 같은 방법으로 해체할 수 있습니다.

// ... 을 이용하여 확산연산자를 사용할 수 있습니다.

// 6.3.3. 매개변수의 기본값
// 매개 변수의 기본값을 지정하는 기능이 ES6에서 추가되었습니다.

function fo(a, b ="default", c=3){
    // 넘어오지 않는 변수는 지정된 값으로 됩니다.
}


// ★ this 키워드 

const q = { 
    name: 'Wallace',
    speak() { return `My name is ${this.name}`},
};

// this 는 어떻게 선언했느냐가 아니라 어떻게 호출 했느냐에 따라 귀속 되는것이 다릅니다. 
// 여러개 가 중첩된 함수에서는 this 의 오류가 날 가능성이 높으므로 별도 변수에 this 를 할당하는 방법이 있다.

// 6.6 익명함수 

// ★★ 화살표 표기법 ★★ 
// function 과 중괄호 개수를 줄이기 위해 고안된 es6의 문법

// function 생략가능 , 매개변수가 하나라면 () 생략가능, 바디가 표현식 하나라면 중괄호,return 생략가능 
const f1 = function() { return "hello";}
const f2 = () => "hello";

const f3 = function(name) { return `hello, ${name}`;}
const f4 = (name) =>  `hello, ${name}`;

const f5 = (a,b) => a + b;

// 익명 함수를 만들어 다른곳에 전달하려고 할 때 화살표 함수는 유용합니다.
// 화살표 함수에서는 this가 정적으로 묶이게 됩니다.

// 6.8 call. apply , bind 
// JS에서는 일반적인 방법 외, 호출 여부와 관계없이 this 가 무엇인지 지정할 수 있습니다.

const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};
function greet() {
    return `Hello, I'm ${this.name}`;
}
greet();
console.log(greet.call(bruce));
greet.call(madeline);