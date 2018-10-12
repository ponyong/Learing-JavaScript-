// 예외 처리 exception 

// 내장 된 에러객체로 Error 인스턴스를 만들면서 에러 메세지를 지정 할 수 있습니다. 

const err = new Error('invalid email');

function validetaEmail(email) {
    return email.match(/@/) ?
        email:
        new Error(`invalid email: ${email}`);
}

const email = "ponyong@naver.com";

const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
    console.error(`Error: ${validetaEmail.message}`)
}
else {
    console.log(`Valid email: ${validatedEmail}`);
}

// try catch 문 

const email = null;
try{

const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.error(`Error: ${validetaEmail.message}`)
    }
    else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch (err) {
    console.log(`Error: ${err.message}`);
}
// throw 를 호출하면 함수는 즉시 실행을 멈추고 이동합니다.

try {
    throw new Error("whoops");
} catch (err) {
    // catch
}finally {
    // catch에서 아무것도 잡아내지 않았다면 이곳을 실행 
}
