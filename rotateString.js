/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

String 1: 'hi'
doubled string 1 was 'hihi'
rotated : ihih


string1 :1234
doubled : 12341234
string2 : 2341

*/

//input: string1 , string2
//output: if string 2 is in string 1

//coding plan:
//create a doubled string version of string1 by concating it with itself
//console log the concatted version of string1 i.e double string
//to find string2 we search within string1 using indexOf method (has to be greater than -1)
//returns a boolean

function isRotated(str1, str2) {
  var doubleString = str1.concat(str1);
  console.log(doubleString);
  return doubleString.indexOf(str2) > -1;
}

console.log(isRotated("hello world", "orldhello w"));
console.log(isRotated("hi", "ih"));
console.log(isRotated("1234", "2341"));

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

//TESTING CASE
var actual = isRotated("hello world", "orldhello w");
var expected = true;
assertEqual(
  actual,
  expected,
  "should return true if string2 is rotated version of string1"
);

var actual = isRotated("hi", "ih");
var expected = true;
assertEqual(
  actual,
  expected,
  "should return true if string2 is rotated version of string1"
);

var actual = isRotated("1234", "2341");
var expected = true;
assertEqual(
  actual,
  expected,
  "should return true if string2 is rotated version of string1"
);

/* Interview Notes
  
  Things I Need to Work on:
  (a)spent most of beginning of the interview silent 
    (i) why was I silent?  Silent because the solution was too easy and I was \
        second guess myself.  Also, I didn't realize that the rot20 was a hint \
        might have been able to demonstrate more competancy by trying to solve \
        problem before revealing the hint (knew about the hint even before I  \
        was able to )
  (b) admitted that I was confused too late in the interview  
  (c) only now realizing (after the interview) different tests I could have run \
        given how much time was left after I coded an answer.
        
  Things I did well:
  (a) Found a simple solution
  
  Action Steps:
  (a) Review how to get unstuck
  (b) Try talking a lot in the beginning, code quickly, then REMEMBER TO TEST (especially) \
      if you find yourself with lots of extra time.
  */
