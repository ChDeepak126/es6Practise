class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}
let person1 = new Person("chari", 20);
console.log(person1.name);
console.log(person1.age);
person1.greet();