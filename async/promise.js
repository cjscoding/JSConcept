'use strict';

//콜백을 쓰지않고 프로미스로 비동기 코드을 깔끔하게 짜보자
//Promise is a JavaScript object for asynchronous operation.
//프로미스는 비동기식 동작을 위한 자바스크립트의 내장 객체
//keypoint 2가지
//1. State : pending -> fulfilled or rejected (상태)
    //pending : resolve도 reject도 하지 않은 상태(undefined 상태)
    //fulfilled : resolve한 상태
    //rejected : reject한 상태
//2. Producer vs Consumer (정보 제공자 vs 정보 소비자)

//1. Producer
//when new Promise is created, the executor runs automatically. => 잘 염두하고 코드짜기
//새로운 Promise 객체가 만들어지는 순간 execute콜백함수 실행됨
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    //프로미스 내에서는 보통 꽤 무거운 코드가 진행된다
    //네트워크 연결이나, 파일 읽기 등등...
    console.log('doing something...');
    setTimeout(() => {//네트워크 통신 시간 걸리는 것을 setTimeout으로 그런 척 하자
        //성공적으로 네트워크에서 정보를 받아왔을 경우
      //resolve('ellie');//resolve함수에 인자값 전달
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumers : then, catch, finally
promise
    .then((value) => {//resolve(성공) 했을 때
        console.log(value);
    })//promise가 return됨
    .catch(error => {//reject(실패) 했을 때
        console.log(error);
    })//return된 promise에 catch를 등록
    .finally(() => {//성공여부 상관없이 마지막에 꼭 수행됨
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)//1=>2
    .then(num => num * 3)//2=>6
    .then(num => {//6=>5전달
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })//then은 값을 바로 전달하기도 하지만 Promise를 전달하기도 함
    .then(num => console.log(num));//5=>5출력

//4.Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {//reject 시
        return '🥖';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
//위 코드들이 모두 인자를 하나씩만 받는 함수들이기 때문에
//간단하게 다음과 같이 쓸 수 있다.
getHen().then(getEgg).then(cook).then(console.log);