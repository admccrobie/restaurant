// array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

// get the sum of the elements
var sum = 0;

//use a for loop to calculate the sum
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){
  // use the unary addition operator
  // to add the current element's value to the rolling sum
  sum += testArray[arrayPosition];
}

console.log("The sum of " + testArray + " is: " + sum);
