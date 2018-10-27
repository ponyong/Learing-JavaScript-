// 비동기적 프로그래밍

// JS의 애플리케이션은 단일 스레드에서 동작 합니다
// 즉 , 한번에 한가지 일만 수행 할 수 있습니다. 

// 만약 , 한가지일이 10시간 걸린다고 했을 때 , 이를 동기적으로 실행하게 되면
// 다른 일을 처리하기 위해 10시간을 기다려야 할 수도 있게 됩니다 ( 단일 스레드로 처리하기 때문에 )

// 따라서 비동기적으로 일을 처리할 필요성이 있습니다. 

// 14.2 콜백 

// 콜백은 보통 익명함수로 활용합니다. 

console.log("Before timeout: " + new Date());
function f() {
    console.log("After timeout: " + new Date());
}
// 콜백의 실행을 지정된 밀리초만큼 지연하는 내장함수
setTimeout(f, 60 * 10);
console.log("I happen after setTimeout!");
console.log("Me too");

// 일반적으로는 다음과 같이 익명함수를 사용합니다.
setTimeout(function(){ 
    console.log("After timeout: " + new Date());
}, 60 * 1000);
// 지연 매개변수는 항상 마지막에 사용합니다. 

// 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있습니다.

// 콜백 헬 
// 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제
$.get('url', function (response) {
	parseValue(response, function (id) {
		auth(id, function (result) {
			display(result, function (text) {
				console.log(text);
			});
		});
	});
});
// 모든 과정을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 형식으로 코딩을 하게 됩니다
// 이렇게 하게 되면 가독성도 낮고 로직변경도 어렵습니다. 

// 각 콜백을 함수로 분할 하거나 promise, async 등을 사용하는 방법이 있습니다 . 


// 프라미스 

// 콜백의 단점을 해결하려는 시도에서 만들어졌습니다. 
// 안전하고 관리하기 쉬운 코드를 만들 수 있습니다. 

// 프라미스는 성공(fulfilled) 하거나 실패 (rejected)하거나  단 두가지로 이루어져 있습니다.
// 둘중 하나만 일어난다고 확신 할 수 있고, 한 번 정해지면 변하지 않습니다. (settled) 됬다고도 합니다.

// then 핸들러 

// 어렵...