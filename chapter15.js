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