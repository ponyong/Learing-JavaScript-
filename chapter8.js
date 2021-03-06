const arr1 = [1,2,3];

const arr2 = [1, "a" , 2];

// 배열은 0 부터 시작합니다.
// 한 배열내의 프로퍼티가 모두 같을 필요는 없습니다.
// 배열의 크기보다 크게 할당하면 자동으로 늘어나고 undefined로 설정됩니다.

arr1.push("e"); // 배열 끝에 추가
arr1.pop();     // 배열 끝에 제거

arr.unshift("a"); // 배열 첫 요소 추가 
arr.shift();      // 배열 첫 요소 제거

concat(4,5,6);    // 기존 배열에 배열을 추가해서 사본 배열을 반환합니다.

slice(3);       // slice (시작값, 끝값) 의 배열의 일부를 가져옵니다. 끝값을 생략하면 끝까지 가져옵니다.

splice(3 , 0, 4); // splice(수정을 시작할 인덱스, 제거할 요소 숫자 (아무것도 안하는건 0))  그후는 배열에 삽입 

//ES6 도입
copyWithin(1, 2)  // copyWithin 배열안에서 요소 교체하기  요소를 복사해 다른위치에 놓고 기존요소를 덮어씁니다.
                  // 1. 붙여넣을 위치 , 2. 복사 시작 위치,  3. 복사 끝 위치
                  // 음수 인덱스를 넣으면 배열의 끝부터 셉니다. 


// 특정값으로 배열채우기.

const arr = new Array(5).fill(1);

// 역순정렬

const arr = [1,2,3,4,5];
arr.reverse();

arr.sort();

// 배열 검색 
arr.indexOf(2); // 찾고자 하는것과 정확히 일치하는 첫요소의 인덱스
arr.lastIndexOf(5); // 찾고자 하는 것과 정확히 일치하는 첫요소를 뒤에서부터 찾습니다.
// 불일치하면 -1 을 반환합니다. 

arr.findIndex(); // indexOf와 비슷하지만 보조함수를 통해  검색조건을 지정 할 수 있습니다. 
arr.find();      // 조건의 맞는 요소의 인덱스가 아니라 그 요소 자체를 원할 때 사용합니다.


arr.some();      // 조건에 맞는 요소를 찾으면 true를 반환하고 검색을 멈춤 , 못찾으면 false를 반환
arr.every();     // 배열의 모든 요소가 조건에 맞으면 true , 아니면 false를 반환한다.

// Map , Filter 

arr.map();       // 배열 요소를 변형합니다.   // 일정한 형식의 배열을 다른형식으로 바꿔 사본을 반환합니다.
arr.filter(c => c.value > 10);    // 배열에 필요한 것만 남깁니다. 


arr.reduce();    // 배열의 요소를 하나로 줄입니다.

arr.join();      // 문자열 병합 매개변수로 구분자 1개를 받고 요소들을 하나로 합친 문자열을 반환합니다. 
                 // undefined , delete, null, 은 모두 빈문자열 취급 
