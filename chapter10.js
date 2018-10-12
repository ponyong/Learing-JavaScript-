// Map , Set

// Map => 키와 값을 연결한다는 점에서 객체와 비슷
// Set => 중복 허용만 안하면 배열과 비슷


// 맵 
const u1 = { name: 'Cynthia'};
const u2 = { name: 'Jackson'};
const u3 = { name: 'Olive'};
const u4 = { name: 'James'};

const userRoles = new Map();

userRoles
    .set(u1, 'User')
    .set(u2, 'user')
    .set(u3, 'Admin');

userRoles.get(u2);

// map에 키가 존재하는 지 확인 하는 has() 메소드
// 맵이 이미 존재하는 키에 set() 을 호출하면 값이 교체됩니다. 
// .size 프로퍼티는 맵의 요소 숫자를 반환합니다. 

// 맵의 요소를 지울 때
userRoles.delete(u2);

// 맵의 모든 요소를 지울 때
userRoles.clear(u1);


// WeakMap
    // 차이점 

    // 키는 반드시 객체이여야 합니다. 
    // WeakMap의 키는 가바지 콜렉션에 포함될 수 있습니다.
    // WeakMap 은 이터러블이 아니며 clear() 메서드도 없습니다. 


// 셋 -> 중복을 허용하지 않는 데이터 집합 / 한사용자에게 여러역할 할당 ?  

const roles = new Set();

roles.add("User");

roles.add("Admin");

// 추가 하려는 것이 셋에 이미 있다면 아무것도 일어나지 않습니다. 
// 셋에 없다면 추가가 됩니다

// 역할제거 
roles.delete("Admin");
roles;
roles.delete("Admin");  // false  

// 제거에 성공하면 true 멈추면 false를 반환합니다 .

// WeakSet