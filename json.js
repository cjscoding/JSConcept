//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`Can jump!`);
    }
};

json = JSON.stringify(rabbit, ['name', 'color']);//원하는 프로퍼티만 골라서 출력도 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'sue' : value;
});
console.log(json);

//2. JSON to Object
//parse(string)
console.clear();
json = JSON.stringify(rabbit);
console.log(json)
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();//error => json변환 시 함수는 제외되기 때문에 다시 obj로 가져올때 함수에 해당하는 객체는 존재하지 않음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());