/*
Write a function called "listAllValues" which returns an array of all the input object's values.

Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:

Do not use "Object.values" to solve this prompt.
*/

//input: object
//output: array of input object values

function listAllValues(obj) {
  //create a values var, assign to empty array
  var values = [];
  //iterate over object using for-in loop
  for (var key in obj) {
    //push values with current obj[key]
    values.push(obj[key]);
  }
  //return values
  return values;
}

// testing cases //
var output = listAllValues({
  name: "Krysten",
  age: 33,
  hasPets: false,
});
console.log(output); //--> ['Krysten', 33, false]

var output = listAllValues({
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
});
console.log(output); //--> ['a', 11, true, 1]
