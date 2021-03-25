/*
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A:

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900

Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);

Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" does not end with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.
*/

function listAllBlackShoes(inventory) {
  //create a flatBlackList string
  var flatBlackList = "";
  //iterate over input length
  for (var i = 0; i < inventory.length; i++) {
    //create designer object, assign to current element
    var designerObj = inventory[i];
    //iterate over designer object shoes
    for (var j = 0; j < designerObj.shoes.length; j++) {
      //if current shoe is black
      if (isBlackShoe(designerObj.shoes[j])) {
        //add to flatBlackList: designer name, shoe name, and shoe price
        flatBlackList +=
          designerObj.name +
          ", " +
          designerObj.shoes[j].name +
          ", " +
          designerObj.shoes[j].price;
        //if we are not on last shoe in entire inventory
        //last shoe is when i at max and j at max
        if (i === inventory.length - 1 && j === designerObj.shoes.length - 1) {
          continue;
        } else {
          flatBlackList += "\n";
        }
      }
    }
  }
  //return flatBlackList
  return flatBlackList;
}

//define a function to determine if shoes are black
function isBlackShoe(shoeObj) {
  //return true if shoeObject contains 'black' in the name`
  //indexOf returns the index of a substring within another string, and will return -1 if substring ('black') is not present
  if (shoeObj.name.indexOf("black") > -1) {
    return true;
  } else {
    return false;
  }
}

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

//TEST CASES
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

var actualFlatBlackList = listAllBlackShoes(inventory);
var expectedFlatBlackList =
  "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900";

assertEqual(
  actualFlatBlackList,
  expectedFlatBlackList,
  "should return flatBlackList in correct format"
);

console.log(listAllBlackShoes(inventory));
