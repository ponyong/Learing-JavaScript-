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
