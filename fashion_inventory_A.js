/*
You have a fashion catalog, an inventory of items from various high-fashion designers. 
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


Write a function that will take in this currentInventory array as its argument. 
Your function should access all the shoes across each designer and 
return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...

Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);

Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. 
Also note that the "flat list" does not end with a newline symbol. 
In order to get the most effective practice, please continue to write your own unit tests.
*/

function renderInventory(inventory) {
    //create a flatList string
    var flatList = '';
    //iterate over length of input inventory
    for (var i = 0; i < inventory.length; i++) {
        //create a designer object var to assign to current inventory element
        var designerObj = inventory[i];
        //iterate over length of designer object shoes
        for (var j = 0; j < designerObj.shoes.length; j++) {
            //add flatList to designer name, shoe name, shoe price
            flatList += designerObj.name + ', ' + designerObj.shoes[j].name + ', ' + designerObj.shoes[j].price;
            //if we are not on last item in inventory yet
            //last shoe is when i at max and j at max
            if ((i === inventory.length - 1) && (j === designerObj.shoes.length - 1)) {
                continue;
            } else {
                //otherwise keep adding items to flatList using newline symbol
                flatList += '\n';
            }
        }
    }
    //return flatList
    return flatList;
}



// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
// TESTS FOR RENDER INVENTORY
var inventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
        ]
    },
    {
        name: 'Gucci',
        shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
        ]
    }
];

// console.log(renderInventory(inventory));

var actualFlatList = renderInventory(inventory);
var expectedFlatList= "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900";

assertEqual(actualFlatList, expectedFlatList, 'should render flat list of inventory');



//run node fashion_inventory_A.js