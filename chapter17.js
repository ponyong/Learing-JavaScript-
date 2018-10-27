// 정규 표현식 ( 정규식 ) regular expression 

// 정교한 문자열 매칭 기능, 문자열 교체기능 , 탐색 기능 등등을 제공합니다. 

// 17.1  부분 문자열 검색 & 대체 

// -- 정규식을 쓰지 않고 문자열 속 부분 문자열을 교체하는 방법 --  String.prototype 메서드가 제공합니다. 

const input = "As I was going to Saint Ives";

input.startsWith("As"); // TRUE  첫 단어가  파라메터의 값인가요?
input.endsWith("Ivas"); // TRUE  마지막 단어가 파라메터의 값인가요?
input.startsWith("going", 9); // TRUE 인덱스 9부터 첫단어가 파라메터 값인가요?
input.endsWith("going", 14);  // TRUE 인덱스 14 번째를 문자열 끝으로 간주합니다.
input.includes("going"); //  TRUE 파라메터 값을 찾습니다.
input.includes("going", 10); // FALSE 인덱스 10부터 찾습니다.
input.indexOf("going"); // going의 시작 인덱스를 반환합니다.
// 못찾으면 -1 을 반환합니다. 
// 이 메소드는 모두 대소문자를 구분합니다.

// toLowerCase() 를 써서 구분없이 하는것도 가능합니다.

input.replace("going", "walking"); // (a, b) a를 찾아 b로 교체합니다. 


// 정규식 만들기

const re1 = /going/;  // 간편한 리터럴 문법
const re2 = new RegExp("going");  // 생성자를 통한 생성

// 예제 정규식 /\w{3,}/ig 세글자 이상인 단어 모두 일치, 대소문자 구분 x 

const input2 = "As I was going to Saint Ives";
const re = /\w{3,}/ig; // {3, 띄어쓰기하면 안됨}

input2.match(re); // 일치하는 항목 출력
input2.search(re); // 조건에 부합하는 첫 단어의 인덱스

re.exec(input2); // 처음 일치 was
re.exec(input2); // 마지막위치를 기억하고 그다음 일치하는 것을 찾습니다. going
// ...
re.exec(input2); // 일치하는 것이 없을경우 null

re.test(input2); // TRUE/FALSE 일치하는 것이 한개 이상 있습니다/ 없습니다.

// 17.4 문자열 교체
const input3 = "As I was going to Saint Ives";
const output = input.replace(/\w{4,}/ig, '****'); // 4글자 이상인 것들을 모두 ****로 바꿉니다.
// As I was **** to **** ****

// 17.5 입력 소비


// 17.6 대체
    // HTML 페이지를 문자열에 담았다고 가정, 이 문자열에서 외부자원 태그 
    // <a>, <area> , <link>, <script>, <source>, <meta> 등을 찾고싶다.
    // 대소문자가 구분되지 않아 <HTML> <LINK> 같은것도 있다

const html = 'HTML with <a href="/one>one link</a>, and some JavaScript.' + '<script src="stuff.js">';
const match = html.match(/area|a|link|script|source/ig); 
// | 대체를 뜻하는 메타 문자
// i 대소문자를 가리지 않고
// g 전체를 검색 없을경우 첫 번째만 반환합니다.

// 겹치는 것이 있을때는 큰것을 먼저 써야합니다. 작은 것을 먼저 쓰면 큰것은 찾을 수 없습니다.
// 이렇게 실행하게되면 태그가 아닌 것도 나올 수 있습니다.


// 정규식은 아주 간단한 언어만 분석할 수 있습니다.
// 정규식을 사용하여 HTML 파일을 완벽히 분석하는 것은 불가능합니다.
// 정규식은 계층적 구조에 매우 취약합니다.

// 17.8 문자 셋
// 글자 하나를 다른 것으로 대체하는 방법을 간단한게 줄인 것

// 특정 범위 , 특정 문자를 제외 하고 찾는다던지 등에 사용하기 좋습니다.

// 17.9 
// \d [0-9] 0~9
// \D [^0-9] 0~9 빼고
// \s [ \t\v\n\r] 탭 , 스페이스, 세로텝 , 줄바꿈 포함
// \S 
// \w [a-zA-Z_] 

// 등등으로 원치 않는것들을 빠르고 효율적으로 제거하는것이 가능합니다.


// 17.10 반복 
// 숫자 여러개를 찾아야되는경우

const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9][0-9]/); 
// 가능하지만 너무 비효율적
const match = beer99.match(/[0-9]+/);

// 문자셋 이후 + 앞의 요소가 적어도 하나이상 있어야 한다는 뜻
// 반복 메타 문자
// {n} 정확히 n개 
// {n, } 최소 n개
// {n,m} n이상 m 이하 
// ?    0개 또는 1개 {0,1}
// *    숫자는 있어도 되고 없어도 됩니다.
// + 앞의 요소가 적어도 하나이상 있어야 한다.

// 정규식에서 . 는 모든 문자에 일치하는 특수문자입니다. 
// 입력이 어떤 문자이던 관계없이 소비하려 할때 주로 사용
// 혹시 입력시에 . 가 포함되게 하고싶다면 \를 이용하면됩니다.

// 그룹 (?:[패턴])
const text = "visit oreilly.com today!";
const match = text.match(/[a-z]+(?:\.com|\.org\.edu)/i);


// 완벽한 정규식을 만들려고 하면 수고도 많을 뿐더러 가능할지도 미지수 이므로
// 오류를 최소화 한다는 방향으로 정규식을 만드는 편이 좋다.


// 적극적, 소극적 일치
//  정규식은  기본적으로 적극적입니다.
const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching.";

input.replace(/<i>(.*)<\/i>/ig,'<strong>$1</strong>');

// 첫번 째 </i> 를 만나도 소비하지 않고
// 마지막까지 진행하며 두번째 </i> 를 만났을 때 소비합니다.

// 반복메타 * 뒤에 ? 를 붙임으로써 소극적으로 실행할수 있게됩니다.
input.replace(/<i>(.*?)<\/i>/ig,'<strong>$1</strong>');
// 이렇게 하게되면 처음 찾은 </i>를 찾았다고 인식합니다. 


// 17.5 그룹 교체 
// if <a> 태그에서 href가 아닌 속성을 전부 제거하고 싶을때

let html2 = '<a class="nope" href="/yep">Yep</a>';
html2 = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

// $1 $2 숫자 참조 이외에도 
// $` 일치하는것 앞 전부를 참조
// $& 일치하는것 자체
// $' 일치하는 것 이후를 전부 참조 등이있다.

// 17.16 함수를 이용한 교체
const html = 
    `<a class="foo" href="/foo" id="foo">Foo</a>\n`;


// 17.17 위치지정

// ~~으로 시작하는 문자열, __으로 끝나는 문자열 등 에서 ~~, __ 를 앵커라고 합니다. 
// ^는 문자열의 맨 처음
// $는 문자열의 마지막을 나타냅니다.

const input = "It was the best of times, it was the worst of times";

const beginning = input.match(/^\w+/g); // It

// 문자열에 \n (줄바꿈) 문자가 있다면 m 플래그로 각줄의 처음과 끝을 찾을 수 있습니다.

const beginnings = input.match(/^\w+/mg);


//17.18 , 19 , 20.. Q..