/*
Function "sumRangeOfNumbers(x)"

Create a Function to sum all the numbers between 2 
numbers wich are stored in a given array
+++IMPORTANT: the first Number MUST BE SMALLER than the second+++
*/

var givenArray = [2, 5];

function sumRangeOfNumbers(x) {
  /*First:
    Here I take the "givenArray" and create another array
    wich contains the given numbers and the numbers between them
    IN THIS CASE: I have [2,5] so...
    i will have the new array "rangeOfNumbers" wich is: [2,3,4,5]
    */

  var rangeOfNumbers = [];

  for (i = 0; i <= x[x.length - 1] - x[0]; i++) {
    rangeOfNumbers[i] = x[0] + i;
  }

  /*Second:
  Here I start the cycle to sum each part of
  the new array "rangeOfNumbers"
  The result will be a Number wich is the sum of all the numbers
  within the array "rangeOfNumbers"
  IN THIS CASE: I have 2+3+4+5=14

  */

  var sumOfEachNumber = 0;

  for (y = 0; y < rangeOfNumbers.length; y++) {
    sumOfEachNumber = sumOfEachNumber + rangeOfNumbers[y];
  }

  return sumOfEachNumber;
}

console.log(sumRangeOfNumbers(givenArray));
