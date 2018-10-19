// 날짜와 시간
 
// 자바 스크립트에서 모든 Date 인스턴스는 유닉스 시간 원점 으로 부터 몇 밀리초 지났는지를 나타내는 숫자입니다. 

// JS는 보통 이 숫자를 사람이 읽이 편한 그레고리력 날짜로 변환합니다.

const d = new Date();
console.log(d);             // 그레고리력 + 타임존 ( 타임스탬프를 날짜로 변경 )
console.log(d.valueOf());   // 유닉스 타임스탬프 ( 숫자로 표기 )

// Date 객체 만들기

new Date();  // 현재 날짜

// js의 월은 0 부터 시작합니다 0 = 1월 
new Date(2015,0); // 2015년  1월 1일 0시

// new Date ( Year , Month , Day, Hour , Sec , .Sec)

// 매개변수가 1개인경우 유닉스 스탬프로 날짜를 생성합니다.

new Date(0); //  1970년 1월 1일 0시 0분 0초

// 유닉스 원점 시간 이전 값을 구할 때

new Date(-365 * 24 * 60 * 60 & 1000);

// 날짜 문자열 해석

new Date('June 14, 1903');

// 문제점 -- Time 존 / UTC 지역에 살지 않는 이상 콘솔과의 시간 격차가 발생할 수 있음 / 타임존을 명시할 방법이 없기 때문에


// Moment.js
// 웹 기반경우 
// <srcipt src ="//cdnjs.coludflare.com/ajax/libs/moment-timezone/0.4.0/moment-timezone.min.js"> </script>
// node 의 경우
// npm install --save moment-timezone  으로 설치후 require 명령으로 불러올수 있습니다. 

const momnet = require('moment-timezone');

// 서버에서 날짜를 생성할 때는 UTC 를 사용하거나 타임존을 명시하는것이 좋다.
const d = new Date(Date.UTC(2016,4,27));

// 특정 타임존에 있는 서버의 날짜를 생성할때에는 moment.tz 를 써서 Date 를 만들면 된다.

const d = moment.tz([2016,3,27,9,19], 'America/Los_Angeles').toDate();

// 15.6 날짜 전송

// 일반적으로 Date 인스턴스는 날짜를 utc 기준 타임스탬프로 저장함으로 안전한 편이다.
// JSON 파싱을 통해 String 으로 변경하면 가장 확실하게 전송이 가능

// JS가 아닌 시스템과 날짜 데이터를 주고받을 때는 주의를 할 필요가 있습니다. ( 타입이 다를 수 있음)

// 15.7 날짜 형식

// format 메소드를 통하여 날짜를 원하는 형식으로 만들 수 있습니다. 

// ex) MMMM , YYYY , M 등등 자세한 것은 moment.js 온라인 문서에서 제공하는 라이브러리를 참고하면 된다.

// 15.8 날짜 구성 요소

// 년 , 월 , 일,  요일, 시, 분 , 초 , .초 까지 메서드를 통해 지원합니다. 
// UTC 기준 메서드도 포함 되어있습니다.

d.getFullYear();
d.getUTCFullYear();
//  ... ~

// 날짜 비교는 숫자 대소 비교로 구분할수 있습니다. 

// 날짜의 빼기 연산으로 두 날짜 사이의 시간 또한 구할 수 있습니다. 

// 날짜를 더하거나 빼는 메서드도 내장되어있습니다.
let m = moment();
m.add(3,'days'); // 3일 후
m.subtract(2, 'years');  // 2년전