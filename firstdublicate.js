//Given an array a that contains only numbers in the range from 1 to a.length, 
//find the first duplicate number for which the second occurrence has the minimal index. 
//In other words, if there are more than 1 duplicated numbers, 
//return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
//If there are no such elements, return -1

function firstDuplicate(a) {
    let numSet = new Set();
    for (let i = 0; i < a.length; i++) {
        if (numSet.has(a[i])) {
            return a[i];
        }
        numSet.add(a[i]);
    }
    return -1;
}


let a = [2, 1, 3, 5, 3, 2] //firstDuplicate(a) = 3
console.log(firstDuplicate(a))
//There are 2 duplicates: numbers 2 and 3. 
//The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.


let b = [2, 2] //the output should be firstDuplicate(a) = 2
console.log(firstDuplicate(b))

let c = [2, 4, 3, 5, 1] //the output should be firstDuplicate(a) = -1
console.log(firstDuplicate(c))