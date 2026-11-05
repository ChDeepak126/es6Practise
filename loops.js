//for loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
//while loop
let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}
//do-while
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3);
//for...of
let numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number);
}
//map
let numbers = [1, 2, 3];
let doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);
//filter
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(even);
//reduce
let numbers = [10, 20, 30];
let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
console.log(total);
//forEach()
let numbers = [10, 20, 30];
numbers.forEach((number) => {
    console.log(number);
});
//for...in
let person = {
    name: "chari",
    age: 20
};
for (let key in person) {
    console.log(key, person[key]);
}
