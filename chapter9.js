// 프로퍼티 나열

// 프로퍼티 나열에는 순서가 보장되지 않습니다. 거의 항상 같을 순 있지만 그것이 순서가 보장됨을 나타내진 않습니다. 

const SYM = Symbol();

const o = {
    a:1,
    b:2,
    c:3,
    [SYM]: 4,
};

for (let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;  // hasOwnProperty -> for ... in 이 나타날 위험을 제거 하기위해 사용 --> 후속 
    console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

// JS 의 클래스와 인스턴스 

class Car {
    constructor(make , model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGear[0];
    }
    shift(gear) {
        if(this.userGear.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

const car1 = new Car();
const car2 = new Car();

// 프로토 타입

//최근 프로토 타입 메서드를 표시표기법이 # 으로 퍼짐 Car.prototype.shift -> Car#shift 


// ★ 상속

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);   
    }
}

class Car extends Vehicle {
    constructor() {
        super();  // 생성자 상속
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

