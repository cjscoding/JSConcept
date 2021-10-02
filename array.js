'use strict';

//1.Declaration => 선언 방식 2가지
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);//2
console.log(fruits[0]);//apple
console.log(fruits[1]);//banana
console.log(fruits[2]);//undefined

console.clear();
//3.Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
//c. for each
fruits.forEach((fruit, index) => console.log(fruit, index))

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
//pop:remove an item from the end
fruits.pop();
console.log(fruits);
//unshift: add an item to the beginning
fruits.unshift('strawberry', 'peach');
console.log(fruits);
//shift:remove an item from the beginning
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//why?
//pop, push 는 맨 뒤의 칸들만 수정하지만
//shift, unshift는 맨 앞에서 수정하기때문에 배열 전체가 자리를 움직여야 하기 때문

//splice:remove an item by index position
fruits.push('lemon');
console.log(fruits);
fruits.splice(1, 3, 'melon');//(몇 번 인덱스부터, 몇 개를 지울건지, '지운자리에 넣을 데이터')
console.log(fruits);

//combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('peach'));//0
console.log(fruits.indexOf('apple'));//-1 => 해당하는 값이 없을 경우 -1 return 함
//includes
console.log(fruits.includes('lemon'));//true
console.log(fruits.includes('banana'));//false
//lastIndexOf
console.clear();
fruits.push('peach');
console.log(fruits.indexOf('peach'));
console.log(fruits.lastIndexOf('peach'));

console.log(fruits);
console.log(fruits.reverse());
console.log(fruits.join());
console.log(fruits.sort());