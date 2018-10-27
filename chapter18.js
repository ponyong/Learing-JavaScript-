// 브라우저의 자바스크립트

// DOM Document Object Model 문서 객체 모델

// DOM 은 트리 구조로 표현합니다.
// DOM 트리는 노드로 구성됩니다.

// 루트(document) 를 제외한 모든 노드는 부모노드가 있으며 자식노드는 없어도 됩니다. 

// chap18.html 에 소스코드 작성

// 모든 노드는 nodeType , nodeName 프로퍼티가 있습니다.  
document.getElementById('content');
// 모든 HTML 요소는 고유ID 를 가지고 있습니다. 이  ID를 이용해 요소를 찾습니다. 
// 브라우저는 ID가 중복되어도 경고하지 않으므로 주의가 필요

const callouts = document.getElementsByClassName('callout');
// 주어진 클래스 이름에 해당하는 요소 반환

const paragraphs = document.getElementsByTagName('p');
// 주어진 태그 이름에 해당하는 요소 반환

// DOM 메소드가 반환하는 것은 JS 배열이 아닌 배열 비슷한 객체입니다.
// 따라서 map, filter 등 배열 메서드는 사용할수 없습니다. 

// DOM 요소 쿼리
document.querySelector();
document.querySelectorAll();

// CSS 
// .클래스 이름  클래스로 요소를 찾을 때 .A.B 로 사용하수 있음
// # ID로 찾을 수 있음

// 요소선택자 사이에 스페이스를 넣으면 특정 노드의 자손인 요소를 찾을 수 있습니다. 

// DOM 요소 조작

document.textContent();  // HTML 태그를 모두 제거하고 순수한 텍스트 데이터 제공
document.innerHTML();    // HTML 태그를 그대로 제공합니다.

// 모든 요소에는 이 두가지 프로퍼티가 있습니다.


// 새 DOM 요소 만들기
const p1 = document.createElement('p');
p1.textContent ="I was created dynamically!";

// 새 요소를 추가 할때
// 부모 DOM 요소와 그 첫번째 자식을 찾아야합니다.
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1, firstChild); // 삽입할 내용, 삽입할 위치 두개의 변수를 필요로합니다.
parent.appendChild(p1);              // 무조건 제일 뒤에 삽입되므로 삽입 할 요소만 필요로 합니다.


const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for (let a of highlightActions){
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    }) 
}

// HTML을 계층적이므로 이벤트를 꼭 한곳에서 처리할 필요는 없다.
// 직접처리도 되지만 , 부모, 부모의 부모에서도 처리 할 수 있다.

// 여러 요소에서 이벤트를 처리한다면 우선순위는 어떻게 생기는가?

// 1. 가장 먼 조상부터 시작하는 방법 ( 캡처링 )
// 부모노드에서도 자식노드의 이벤트를 '캡처' 할수 있습니다.

// 2. 일어난 요소에서 시작하여 거슬로 올라가는 방법 ( 버블링 )

// 두 방법을 모두 지원하기 위하여 HTML 은 캡처링 부터 시작하여 최하단까지 간후 다시 버블링하는 방식으로 수행합니다.

// 이 과정 중 이벤트 핸들러를 통해 어떻게 호출될지 영향을 주는 방법 3가지

// 1. preventDefault  이벤트를 취소합니다. 
// 취소된 이벤트는 계속 전달은 되지만  defaultPrevented가 true 로 바뀌며 
// 브라우저의 이벤트 핸들러는 true인 것은 아무것도 하지 않습니다. 

// 2. stopPropagation 이벤트를 현재 요소에서 끝내고 더 전달되지 않게 막습니다.
// 해당요소의 핸들러는 작동하지만 연결된 핸들러는 작동하지 않습니다.

// 3. stopImmediatePropagation 
// 다른 이벤트 핸들러 심지어 현재 요소의 이벤트 핸들러의 동작도 막습니다. 


// AJAX 
// HTTP 요청을 만들어 서버에 보내고 데이터로 받습니다 ( 보통 JSON )