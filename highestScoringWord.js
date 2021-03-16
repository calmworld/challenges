/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid
*/

//input: string of words
//output: highest scoring word as a string

//split string into array of words on a space
//create an empty wordsObj
//iterate over words array
//create a word var, assign to all elements of words array
//call out a new function calcScore assigned to wordsObj at word
//return Object.keys at wordsObj sorted function a, b
//return wordsObj at b minus wordsObj at a
//set object value to index 0 after curly bracket parenthesise })[0];

//define calcScore function that takes in word as argument
//let alphabet be a string of all letters with space on index 0
//create a score, set to 0
//split word into chars forEach function that takes in a char argument
//add score to alphabet.indexOf char
//return score

function highestScoringWord(string) {
  let words = string.split(" ");
  let wordsObj = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    wordsObj[word] = calcScore(word);
  }
  return Object.keys(wordsObj).sort(function (a, b) {
    return wordsObj[b] - wordsObj[a];
  })[0];
}

function calcScore(word) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  let score = 0;
  word.split("").forEach(function (char) {
    score += alphabet.indexOf(char);
  });
  return score;
}

console.log(highestScoringWord("what time are we climbing up the volcano"));

console.log(highestScoringWord("sarah is the best"));

console.log(highestScoringWord("walker stalker"));

console.log(highestScoringWord("moma boba dada lolo"));
