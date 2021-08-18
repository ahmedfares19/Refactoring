// Problem
// You have a local variable that’s used to store various intermediate values inside a method (except for cycle variables).

let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

// Solution
// Use different variables for different values. Each variable should be responsible for only one particular thing.
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);
