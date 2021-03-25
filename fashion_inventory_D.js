/*
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like shown below.
*/

function generateLaceDetails(inventory) {
  //create result array for lace details object
  var laceDetails = [];
  //iterate over length of inventory
  for (var i = 0; i < inventory.length; i++) {
    //assign a var to be the current designer obj
    var designerObj = inventory[i];
    //iterate over current designer object's shoe array
    for (var j = 0; j < designerObj.shoes.length; j++) {
      //assign a variable to be the current shoe object
      var currentShoe = designerObj.shoes[j];
      //make a call to a function that will take in a shoe name, and return if that shoe name contains lace
      //if it does contain lace
      if (hasLace(currentShoe.name)) {
        //create a variable and set it equal to the name of the current shoe split on a space
        var nameWordsArr = currentShoe.name.split(" ");
        //crreate a lace detail object literal for current shoe
        var laceObj = {
          //set nameWords property to be nameWordsArray variable created by splitting shoe name on a space
          nameWords: nameWordsArr,
          //set targetWordIndex to result of calling a function that will take in the nameWordsArr and return the index where lace is present
          targetWordIndex: getTargetWordIndex(nameWordsArr),
        };
        //push lace detail object onto lace details array
        laceDetails.push(laceObj);
      }
    }
  }
  //return lace details array
  return laceDetails;
}

//write a function that will take in a shoe name, and return if that shoe name contains lace
function hasLace(shoeName) {
  //expression will be true if name contained lace, false otherwise
  return shoeName.indexOf("lace") > -1;
}

//define a function that will take in the nameWordsArray, and return the index where lace is present
function getTargetWordIndex(nameWordsArr) {
  //iterate over input array
  for (var k = 0; k < nameWordsArr.length; k++) {
    if (nameWordsArr[k].indexOf("lace") > -1) {
      return k;
    }
  }
}

//ASSERTION FUNCTION
//since we are comparing objects, we have to use assertObjectsEqual.
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" + testName + "] Expected " + expected + ", but got " + actual
    );
  }
}

//TESTING CASES
var inventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

var actualOutput = generateLaceDetails(inventory);
var expectedOutput = [
  {
    nameWords: ["tasselled", "black", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["tasselled", "green", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["red", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
  {
    nameWords: ["black", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
];

assertObjectsEqual(
  actualOutput,
  expectedOutput,
  "should return lace shoes in correct format"
);

console.log(generateLaceDetails(inventory));