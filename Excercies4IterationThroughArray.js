// use for loop for numbers to itrate through arrays
// forEach method to iterate through an array and print each color to the console:
// mapping is method used to create a new array called squaredGrades that contains the squares of each number
//Using the filter method to create a new array called adults that contains only ages greater than or equal to 18:

const numbers = [1, 2, 3, 4, 5];
console.log("Using a for Loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//forEach method to iterate through an array and print each color to the console:
const colors = ["red", "blue", "green"];
console.log("Using forEach Method:");
colors.forEach(function (color) {
  console.log(color);
});

// mapping is method used to create a new array called squaredGrades that contains the squares of each number

const grades = [80, 90, 70, 85, 95];
const squaredGrades = grades.map(function (grade) {
  return grade * grade;
});
console.log("Squared Grades:", squaredGrades);

//Using the filter method to create a new array called adults that contains only ages greater than or equal to 18:
const ages = [15, 22, 18, 30, 12, 25];
const adults = ages.filter(function (age) {
  return age >= 18;
});
console.log("Adults:", adults);
