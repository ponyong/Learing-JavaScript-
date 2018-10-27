


// 모듈

// 패키지를 만들고 코드를 네임 스페이스로 구분하는 매커니즘 입니다.

// 모듈은 어떤 타입의 값이 든 내보낼 수 있지만

// 일반적으로는 모듈하나에 여러함수를 저장하고 그 함수를 메서드를 포함하는
// 객체를 내보내는 것이 일반적입니다. 

// 반환받은 것(객체) 의 이름을 붙이면 , 그안에 포함되어있는 모든 것들에는 이름이 있습니다

// 우리가 내부 라이브러리를 가져다 쓰는 것과 같은 개념

// 코어 / 파일 / npm 모듈등이 있고
// 파일 시스템 ( fs )  운영체제 ( os ) 등등 여러가지 모듈들이 제공되고,
// 특정파일 ./ ~~~~ , express 같은 것들을 사용 할 수 있습니다.


const fs = require('fs');

fs.writeFile('TestTxt.txt', 'hello from Node!', function(err) {
    if(err) return console.log('Error writing to file.');
});

// 입력 , 출력 , 변환 , 등등을 제공합니다. 
// 파일을 관리할때 문자열을 인코딩 하지 않으면 이상한 결과를 보게 될 수도 있습니다. 


// os 모듈 컴퓨터의 운영체제에 관한 정보를 제공합니다. 

const os = require('os');

console.log("Hostname: " + os.hostname());
console.log("OS type: " + os.type());
// ...



// 스트림   스트림 형태의 데이터를 다루는 객체입니다.
// read, write , duplex 스트림이 있습니다. 

// 스트림의 예로 사용자의 타이핑, 클라이언트와 통신하는 웹 서비스 등을 들 수 있습니다.

const ws = fs.createWriteStream('stream.txt', {encoding: 'utf-8'});
ws.write('line 1\n');
ws.write('line 2\n');
ws.end();

// 읽기 쓰기 파일을 동시에 읽어 연결하는 pipe 작업도 할 수 있습니다. 

