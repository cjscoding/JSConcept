// async & await
//clear style of using promise :)

//1.async
//async붙여주면 해당 함수를 자동으로 promise로 만들어줌
async function fetchUser() {
    //do network request in 10 seconds...
    return('ellie');
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2.await (async 선언된 함수 내에서만 사용 가능)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

//async없이 promise로 구현할 경우
//callback지옥과 같은 현상이 벌어질 수 있다!!
/**
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(console.log);
**/

//위의 코드를 async를 활용하여 간단하게 구현해보면
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3.useful Promise APIs
//1).all
//여러 개의 함수를 병렬적으로 처리하는 방식 (시간 효율을 위해)
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

//2).race
//먼저 처리되는 함수 리턴
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);