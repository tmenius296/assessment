//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ["red", "green", "black"];

//CODE HERE

let colorcopy = faveColors.slice();

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorcopy.push("blue");

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];
let middleNums = [];

for (y = 0; y < 5; y++) {
  if (numbers[y] !== 1 && numbers[y] !== 5) {
    middleNums.push(numbers[y]);
  }
}

//CODE HERE

//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE
function bigOrSmall(arr) {
  const answers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 100) {
      answers.push("small");
    } else {
      answers.push("big");
    }
  }
  return answers;
}

console.log(bigOrSmall([0, 105, 100]));
