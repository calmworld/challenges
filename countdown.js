/*
Given an integer num, write code to print a countdown from num to 1.
After the countdown, print the line "Liftoff!"
*/

//All recursive functions have a base case and recursive case. 
//The base case is the scenario where you don’t want to make a 
//recursive call (where the function will stop calling itself). 
//The recursive case is the scenario where you do want to make a 
//recursive call, and (very importantly) make it in a way that brings you towards the base case. 
 

//What might the base case for liftoff countdown be?
//Recursive case


function liftoff(num) {
   while (num > 0) {
     console.log(num); 
     num--;
   }
   console.log('Liftoff!');
}


////another way
// function liftoff(num) {
//     if (num === 0) {
//         console.log("Liftoff!")
//     } else {
//         console.log(num);
//         liftoff(num - 1);
//     }
// }


liftoff(5) // should print
// 5
// 4
// 3
// 2
// 1
// Liftoff!