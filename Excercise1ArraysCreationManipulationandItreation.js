
// Accessing Elements and Modifying Elements: Log the second element,Change the third element to 'grape'
// Array Length: Log the length of the array
// Adding and Removing Elements: Add 'kiwi' to the end and then remove it
// Iterating with For Loop

let fruits = ['apple', 'banana', 'cherry'];
// Accessing Elements: Log the second element
console.log('Second element:', fruits[1]);

// Modifying Elements: Change the third element to 'grape'
fruits[2] = 'grape';

// Array Length: Log the length of the array
console.log('Array length:', fruits.length);

// Adding and Removing Elements: Add 'kiwi' to the end and then remove it
fruits.push('kiwi');
console.log('Added kiwi:', fruits);

fruits.pop(); // Removes the last element
console.log('Removed kiwi:', fruits);

// Iterating with For Loop
console.log('Iterating with For Loop:');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Iterating with forEach
console.log('Iterating with forEach:');
fruits.forEach(function(fruit) {
  console.log(fruit);
});
