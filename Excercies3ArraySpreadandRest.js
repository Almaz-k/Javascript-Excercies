// what to do?
// Spread operation array creation function for diffrent array
// spread array expand an array or objects to individual elemnts of an array use spread operator to combine  
//Rest array used to collacte or condese multiple elements into a single array or object 
const fruits1 = ['Apple', 'Mango', 'Banana'];
const fruits2 = ['Orange', 'Pineapple', 'Grapes'];
const allFruits = [...fruits1, ...fruits2];
console.log('Combined fruits:', allFruits);

// Using the spread operator for function arguments
function addNumbers(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return;
  }
  return a + b + c;
}
const arrayOfNumbers = [10, 20, 30];
const sum = addNumbers(...arrayOfNumbers); // Spread the array into function arguments
console.log(`Sum of numbers: ${sum}`);

// Using the rest operator in function parameters
const multiply = (firstNumber, ...restNumbers) => {
  if (isNaN(firstNumber) || !Array.isArray(restNumbers)) {
    return;
  }

  let product = firstNumber; // Initialize product with firstNumber
  restNumbers.forEach(number => {
    product *= number; // product = product * number
  });
  return product; // Return the product
}
const result1 = multiply(1, 2, 3, 4, 5);
console.log(`Product result from rest operator: ${result1}`);

const [...copyFruits] = fruits1; // Using the spread operator to create a copy
console.log(`Copy of fruits 1: ${copyFruits}`);
