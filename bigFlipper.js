/*
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'

*/

//input: string
//output: flipped chuck of n characters

//coding plan
//In the big Flipper example, we do things a little differently
//create a flipChars empty string
//we iterate by n, rather than 1 or 2 (...; i += n)
//we then slice the n-length portion off of the input string, reverse it, and add it to a result string
//return flipChars

//define a new function reverseString that takes in a string input
//function should return string splitted, reversed, and joined

function flipEveryNChars(string, n) {
  var flipChars = "";
  for (var i = 0; i < string.length; i += n) {
    flipChars += reverseString(string.slice(i, i + n)); //start slicing at i and stop at i+n
  }
  return flipChars;
}

//define reverseString
function reverseString(string) {
  return string.split("").reverse().join("");
}

var input = "a short example";
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] Expected "' +
        expected +
        '", but got "' +
        actual +
        '"'
    );
  }
}

//TESTING CASES
var flipSample = "a short example";

var actualFlipN = flipEveryNChars(flipSample, 5);

var expectedFlipN = "ohs axe trelpma";

assertEqual(
  actualFlipN,
  expectedFlipN,
  "should return correct flip characters"
);

//console.log(flipEveryNChars(flipSample, 5))
