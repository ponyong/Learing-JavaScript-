// JQuery 

// 제이쿼리는 DOM 조작, Ajax 요청시에 널리 쓰이는 '라이브러리' 입니다.

// 장점 
// 1. 브라우저 호환성을 걱정하지 않아도됨.
// 2. Ajax API 가 매우 간단한 편
// 3. DOM API 더 유용하고 단순한 메소드를 제공함.

// $ 기호를 식별자로 사용 할 수 있다는 장점을 활용한 라이브러리 중 하나

<script src= "http://code.jquery.com/jquery-2.1.4.min.js"></script>
// CDN 을 호출함으로써 불러오는 것이 편하다.

$(document).ready(function() {
    // HTML 코드를 불러
    // DOM 이 구성된 다음 실행됩니다.
})

// 제이쿼리의 text, html 메서드가 있습니다.

// text = textContent                  변경
// html = innerHTML 과 대응합니다.      삽입

// 제이쿼리는 아주쉽게 여러개의 요소를 동시 수정 하는것이 장점입니다.

$('p')
    .eq(2)  // 인덱스는 0부터 시작합니다 3번째 요소를 수정합니다.
    .html('<i>THIRD</i> PARAGRAPH REPLACED');

// 제이쿼리는 체인기능이 있어서 여러요소를 한번에 조작할 수 있습니다.

// append 일치하는 요소의 자식추가
// before , after 형제 추가

$('p')
    .after('<hr>')
    .before('<hr>');
// 이 메소드는 삽입 할 자리를 호출하지만

// appendTo , insertBefore, insertAfter 처럼 요소에 호출하는 메소드도 있습니다.

// CSS의 스타일도 쉽게 바꿀 수 있습니다.

// addClass  클래스 추가
// removeClass 클래스 제거
// toggleClass 클래스 토글
// :even , :odd 선택자로 홀짝 요소 선택가능합니다. 

// 선택한 요소의 부분집합만을 필요로 할때
// eq, filter, not find 등이 있습니다. 