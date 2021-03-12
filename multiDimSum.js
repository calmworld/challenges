/*
Write a method to find the sum of all numbers in a multidimensional array of integers.
 
SAMPLE OUTPUT
Given a multidimensional Array: a = [1, [2, [3, 4]], [5, 6]], multiDimSum would return 21.
We get 21 by adding up all the elements of the array: 1 + 2 + 3 + 4 + 5 + 6 = 21.
 
HINTS
* This problem should probably take about 12 lines or less.
* You may have to use recursion.
*/

//recursive functions generally direct control flow into two branches--the first, a base case, 
//where something is returned; second, the recursive case, where the function is called again.

//the basic structure of the function should be: some type of iterator on the outside 
//(a for loop, for instance) which iterates through the individual elements of the array, 
//and then directs the control flow (deciding if the base case should be applied or the recursive case) 
//at the current element to be iterated over.

//the base case should be when the currently-iterated-over element is a number, 
//and that the recursive case should be when the current element is an array.

//The final, and most difficult, mental jump is towards the end of the function, 
//where we must figure out how one function call returns its final sum to the function call above it;
//i.e., how the recursive stack works. It may be helpful to write out the “return sum” line at the end of the function for a hint


function multiDimSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            sum += arr[i];
        } else {
            sum +=multiDimSum(arr[i]);
        }
    }
    return sum;
}

////Another way - not the best
// function multiDimSum(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (Array.isArray(i)) {
//        multiDimSum(arr[i])
//     } else {
//     sum = sum + arr[i] 
//     }
//   }
//   return sum;
// }

console.log(multiDimSum([5, 24, 3, 7])); //39
console.log(multiDimSum([1, [3, [2, 6]], [5, 4], 7])); //28
console.log(multiDimSum([10, [2, [[3], [10, 4]]], [5, 6]])); //40