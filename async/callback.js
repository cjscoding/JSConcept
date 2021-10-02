'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//hoisting:var, function declaration => JS에서 함수선언은 hoisting이 된다.
//번호 : 동작 순서
//3(동기)
console.log('1');
//6(비동기)
setTimeout(function () {//브라우저에 콜백 요청
    console.log('2');
}, 1000);//브라우저야 1초 뒤에 내가 파라미터로 준 함수를 콜백(실행)해줘
//4(동기)
console.log('3');

//Synchronous callback ( 동기식 콜백 )
//1(함수선언)
function printImmediately(print) {
    print();
}
//5(동기)
printImmediately(() => console.log('hello'));

//Asynchronous callback ( 비동기식 콜백 )
//2(함수선언)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
//7(비동기)
printWithDelay(() => console.log('async callback'), 2000);

//콜백함수는 유용하지만 콜백함수 내에서 콜백함수를 계속해서 부르는 
//콜백지옥이 생길 수 있으니 조심할 것

//Callback Hell example(콜백지옥예제)
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {//백엔드에서 데이터 받아오는 것처럼 동작하도록 setTimeout활용(백엔드 아직 안배워서 임시로)
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === ' coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({
                    name: 'ellie',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

//콜백 체인의 문제점
//1.가독성이 떨어진다.
//2.에러발생시 또는 디버깅을 해야 할 경우 문제를 분석하기 어렵다.
//3.유지보수가 어렵다.