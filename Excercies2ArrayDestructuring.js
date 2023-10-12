//Analysis
// Destructure an Array: Extract the first and second colors []
// Skipping Elements: Skip the first two numbers and extract the third number
// Rest Parameter: Extract the first fruit and collect the remaining fruits
// Default Values: Extract the first shape with a default value
// Swapping Values: Swap the values of variables a and b

const colors = ['red', 'blue', 'green'];
const [color1, color2] = colors;
console.log('First color:', color1);
console.log('Second color:', color2);

// Skipping Elements: Skip the first two numbers and extract the third number
const numbers = [10, 20, 30, 40, 50];
const [, , thirdNumber] = numbers;
console.log('Third number:', thirdNumber);

// Rest Parameter: Extract the first fruit and collect the remaining fruits
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [firstFruit, ...otherFruits] = fruits;
console.log('First fruit:', firstFruit);
console.log('Other fruits:', otherFruits);

// Default Values: Extract the first shape with a default value
const shapes = [];
const [firstShape = 'circle'] = shapes;
console.log('First shape:', firstShape);

// Swapping Values: Swap the values of variables a and b
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log('Swapped values - a:', a, 'b:', b);
