//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JS are instances of Object
//object = {key:value};

//1.Literals and properties => 객체를 만드는 방식 2가지
//1) 'object literal' syntax
const obj1 = {};
//2) 'object constructor' syntax
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const sue = { name: 'sue', age: 25 };
print(sue);

//with JS magic (dynamically typed language) => JS는 다이나믹 타입 언어라서 런타임때 타입이 정해지기 때문에
//can add properties later => 프로퍼티를 나중에 추가할 수 있는 미친 짓이 가능
sue.hasJob = true;
console.log(sue.hasJob);

//can delete properties later => 삭제도 가능
delete sue.hasJob;
console.log(sue.hasJob);

//2.Computed properties
//key should be always string => key는 항상 string으로 받아와야 함
console.log(sue.name);
console.log(sue['name']); //이 방식으로도 value가져올 수 있음
sue['hasJob'] = true;
console.log(sue.hasJob);

//예시
function printValue(obj, key) {
    console.log(obj.key); //undefined => why? 이 경우는 obj내에 'key'라는 이름의 property(key)가 있는지 찾음
    console.log(obj[key]);
}
printValue(sue, 'name');
printValue(sue, 'age');

//3.Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('sue', 25);
console.log(person4);

//4.Constructor Function => 함수로도 object생성이 가능함
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5.in operator: property existence check (key in obj)
//object내에 key있는 지 확인해주는 operator
console.log('name' in sue);//true
console.log('age' in sue);//true
console.log('random' in sue);//false
console.log(sue.random);//undefined => key가 없는 경우 

//6.for..in vs for..of
//for(key in obj)
console.clear();
for (key in sue) {
    console.log(key);
}
//for(value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
//를 더 간결하게 다음과 같이 쓸 수 있음
for (value of array) {
    console.log(value);
}

//7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'sue', age: '25' };
const user2 = user; //이렇게 할 경우 두 객체가 같은 메모리 주소를 가리키게 되어 clone화 되지 않고 동일시 됨
user2.name = 'coder';
console.log(user);

//old way => 옛날에 cloning 하던 방식
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//new way => 새로운 방식
const user4 = {};
Object.assign(user4, user); // 이렇게 하거나
//const user4 = Object.assign({}, user); 요렇게 하거나
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);//blue => 뒤에오는 객체의 프로퍼티 값으로 계속 덮어씌워짐
console.log(mixed.size);