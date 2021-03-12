/*
Binary search is a technique for very rapidly searching a sorted collection 
by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, 
just round it down ("floor" it).
*/

//input: sorted array of numbers - number value
//output: index where value is found

//CODING PLAN:
//create a start point at 0, and end point at length of array -1
//iterate over array using while loop (start <= end) because it's already sorted array
//define midPoint to be (start + end + 1) divided by 2. use Math.floor method 
//if midpoint deeply equals input value, then return midpoint
//otherwise, if midpoint is less than value, then look for it only in right half of array
//start iteration at midpoint + 1
//otherwise, if midpoint is greater than value, then look for it only in left half of previous array
//end iteration at midpoint - 1
//if nothing else return null

function search(array, value) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let midPoint = Math.floor((start + end + 1) / 2);
        if (array[midPoint] === value) {
            return midPoint;
        } else if (array[midPoint] < value) {
            start = midPoint + 1;
        } else if (array[midPoint] > value) {
            end = midPoint - 1;
        }
    }
    return null;
}


// let output = search([1, 3, 16, 22, 31, 33, 34], 31);
// console.log(output) //index of 31(midPoint) is 4


//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

//TEST CASES
//Test case_1
var actual = search([1, 3, 16, 22, 31, 33, 34], 34);
var expected = 6;
console.log(search([1, 3, 16, 22, 31, 33, 34], 34));

assertEqual(actual, expected, 'should return correct index of input value');

//Test case_2
var actual = search([1, 3, 16, 22, 31, 33, 34], 31);
var expected = 4;
console.log(search([1, 3, 16, 22, 31, 33, 34], 31))

assertEqual(actual, expected, 'should return correct index of input value');

//Test case_3
var actual = search([1, 3, 16, 27, 35, 61, 66, 68, 72, 77, 80], 60);
var expected = null;
console.log(search([1, 3, 16, 27, 35, 61, 66, 68, 72, 77, 80], 60));

assertEqual(actual, expected, 'should return correct index of input value');


// //ANOTHER WAY - DOESN'T WORK WITH null

// function search(array, value) {
//   var newArr = [];
//   var midpoint = Math.floor(array.length / 2);
//   while (newArr > 1) {
//     if (array[midpoint] === value) {
//       return newArr.push(midpoint);
//     } else if (value > array[midpoint]) { //if value > midpoint,consider only the right half of the previous array
//       newArr = array.slice(midpoint, array.length -1); //start slicing at midpoint, stop at length of array -1
//     } else if (value < array[midpoint]) {
//       newArr = array.slice(1, midpoint);
//     } 
//   }
//   return array.indexOf(value);
// }