'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

//1.Class declarations
class Person{
    //Constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}:hello!`);
    }
}

const sue = new Person('sue', 25);
console.log(sue.name);
console.log(sue.age);
sue.speak();

//2.Getter and Setter
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3.Fields (public, private)
//Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0; // #붙이면 private변수
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);//undefined => 외부에서는 private변수 읽을 수 없음

//4.Static properties and methods
//Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`Drawing ${this.color} color!`)
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape{//상속받은 함수를 overriding도 가능
    draw() {
        super.draw();
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() { // js object method 상속하여 overriding
        return `Triangle: color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true => JS에서 만든 모든 object class들은 js의 object를 상속함
console.log(triangle.toString());

//JS reference page
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference