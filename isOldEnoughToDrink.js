/* Write a function called "isOldEnoughToDrink". 
Given a number, in this case an age, "isOldEnoughToDrink" 
returns whether a person of this given age is old enough to legally drink in the U S.

The legal drinking age in the United States is 21. */ 




function isOldEnoughToDrink(age) {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
}



let output = isOldEnoughToDrink(22);
console.log(output); //--> true

let output2 = isOldEnoughToDrink(18);
console.log(output2); //--> true
