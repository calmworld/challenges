// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
// [
//     {firstName: "John",  lastName: "Doe",   age: 13},
//     {firstName: "John",  lastName: "Doe",   age: 62},
//     {firstName: "Janet", lastName: "Doe",   age: 14},
//     {firstName: "Jenny", lastName: "Smith", age: 34},
//     {firstName: "John",  lastName: "Doe",   age: 32},
//     {firstName: "Jenny", lastName: "Smith", age: 12},
// ]

// In this example, the Doe family has the longest line of juniors.

// Let’s talk about your plan of attack before you start coding, and remember
// to keep talking me through what you are doing as you code.


const people = [
    {firstName: "John",  lastName: "Doe",   age: 13},
    {firstName: "John",  lastName: "Doe",   age: 62},
    {firstName: "Janet", lastName: "Doe",   age: 14},
    {firstName: "Jenny", lastName: "Smith", age: 34},
    {firstName: "John",  lastName: "Doe",   age: 32},
    {firstName: "Jenny", lastName: "Smith", age: 12},
]

function findLongestJuniorFam(people) {
    let counterA = 0;
    let counterB = 0;

    for (const obj of people) {
        if (obj.firstName === "John" && obj.lastName === "Doe") {
            counterA++;
        } else if (obj.firstName === "Janet" && obj.lastName === "Doe") {
            counterA++;
        } else if (obj.firstName === "Jenny" && obj.lastName === "Smith") {
            counterB++
        }
    }
    if (counterA > counterB) {
        return counterA;
    } else if (counterB > counterA) {
        return counterB;
    }
}

console.log(findLongestJuniorFam(people))





//First attempt - not the best approach
// function junior(people) {
//   //create a result array
//   let result = [];
//   let juniors = 0;
//   //loop through array of objects
//   for (let i = 0; i <= people.length; i++) {
//     people[i].firstName == "john";
//     people[i][1];
//     people[i][2];
//   }

//   result.push(people[i].firstName);

//   if (juniors > results) {
//     juniors += results;
//   }

//   return junior;
// }