// 객체 프로퍼티 설정과 프락시

const USER_EMAIL = Symbol();
class User {
    setEmail(value) {
        if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    getEmail() {
        return this[USER_EMAIL];
    }
}
// 잘 쓰이지만 뭔가 불편함 

const USER_EMAIL2 = Symbol();
class User2 {
    set email(value) {
        if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email() {
        return this[USER_EMAIL];
    } 
}

// 함수를 두개 사용 했지만 email 하나로 묶었음 
// 할당 시에는 set 호출시에는 get 이 호출됨.

const obj = { foo: "bar"};
Object.getOwnPropertyDescriptor(obj, 'foo');

// 프로퍼티 속성은 세가지가 나타납니다.
// 쓰기 가능한지 writable
// 나열 가능한지 enumerable
// 설정 가능한지 configurable 
Object.defineProperty();
// 로 속성을 컨트롤 할 수 있으며
// 읽기전용 같은것으로 만들 수도 있습니다. 


// JS가 매우 유연하기 때문에 공격하기도 쉽습니다.
// 어디서든 객체를 쉽게 바꿀 수 있으므로 의도와 다르게 위험한 코딩을 할 수도 있습니다.

// 객체를 보호하여 수정을 막고 공격을 어렵게 만드는 방법
// 1. 동결

// 객체를 동결하게 되면 그 객체는 불변이 됩니다
Object.freeze();
// 를 사용하며 
Object.isFrozen();
// 으로 확인합니다. 앞으로 바뀔일이 없을것이라고 생각하는 정보들에 대해 동결합니다.


// 2. 봉인

// 객체를 봉인하게 되면 새 프로퍼티의 추가 , 기존 프로퍼티 변경,삭제가 불가능합니다.
// 클래스의 인스턴스를 사용하면서 인스턴스의 프로퍼티를 수정하는 매서드는 동작하도록 할때 사용합니다.
// 봉인할때에는 
Object.seal();
// 확인할때에는
Object.isSealed();
// 를 사용합니다. 

// 3. 확장 금지
// 3가지 중 가장 약한 제약입니다. 
// 객체에 새 프로퍼티를 추가하는 것만 금지됩니다. 
// 프로퍼티에 할당, 삭제 , 속성 변경은 모두 허용됩니다. 

Object.preventExtensions();
// 로 금지하며
Object.isExtensible();
// 로 확인합니다. 

// 프락시 
// 새롭게 추가된 메타 프로그래밍 -> 프로그램이 자기 자신을 수정하는것을 말합니다. 

// 프락시 생성자에게 넘기는 매개변수는 
// 1. 타겟( 프락시할 객체)
// 2. 가로챌 동작을 가리키는 핸들러

