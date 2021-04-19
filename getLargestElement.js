/* Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:

It should return 0 if the array is empty. */

//input: array
//output: largest number in array

function getLargestElement(arr) {
  //edge case: It should return 0 if the array is empty
  //create largestNum var, assign to arr indexed at 0
  //iterate over length of input array
  //if current element is greater than largestNum
  //assign largestNum to current element
  //return largestNum
  if (arr.length === 0) {
    return 0;
  }
  var largestNum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
