/*
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.
Your function should return the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
///*/

function calculateAveragePricePerDesigner(inventory) {
  //create a result var (averageObj) in object literal formatt same as given formatt
  var averageObj = {
    designers: [],
  };
  //iterate over input inventory
  for (var i = 0; i < inventory.length; i++) {
    //create a designerObj, assign to current element
    var designerObj = inventory[i];
    //create a shoesArr, assign to designerObj shoes
    var shoesArr = designerObj.shoes;
    //create a price object for current designer, with name and average price properties
    var priceObj = {
      //first prop is name with value of designerObj. name
      name: designerObj.name,
      //average is set to a function that we define below, function should return the average price of a shoes array
      averagePrice: averagePrice(shoesArr),
    };
    //add price object to result object
    averageObj.designers.push(priceObj);
  }
  //return result obj
  return averageObj;
}

//define averagePrice function
function averagePrice(shoesArr) {
  //call another function to sum up price of shoes array divided by length of same array
  return sum(shoesArr) / shoesArr.length;
}

//define sum function
function sum(shoesArr) {
  //create a sum var, assign to 0
  var sum = 0;
  //iterate over input array
  for (var j = 0; j < shoesArr.length; j++) {
    //add to the sum the price of each shoe
    sum += shoesArr[j].price;
  }
  //return sum
  return sum;
}

//Assertion Function // we are comparing average price of 2 objects so we use assertObjectsEqual
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
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

var actualOutput = calculateAveragePricePerDesigner(inventory);
var expectedOutput = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
};

assertObjectsEqual(
  actualOutput,
  expectedOutput,
  "should return correct average price format"
);


console.log(calculateAveragePricePerDesigner(inventory));