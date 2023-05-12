// Given an array of numbers, write a function in JavaScript
// that returns the sum of all the numbers in the array.
// source: ChatGPT

const foo = [1, 2, 3, 1, 11, 2, 1];

let sum = 0;

foo.forEach(value => {
    sum += value;
})

console.log(`The value of the array is: ${sum}`);