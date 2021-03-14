/*
Back to regular skeletons! Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

Similarly to some of the previous problems in this section, there is a concept here that will be new to you. Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

// Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
//Ascending means smallest to largest, 0 to 9, and/or A to Z and Descending means largest to smallest, 9 to 0, and/or Z to A.
*/


// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list
    var words = sentence.split(' ');
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) {
          palindromes.push(words[i]);
      }
    }
    var sorted = palindromes.sort(sortAscendingByLength);
    var longestPalindrome = sorted.pop();
    return longestPalindrome;
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    word = word.toLowerCase();
    return word === reverseString(word);
  }
  
  function reverseString(string) {
    //split, reverse, and join
    // var splitter = string.split('');
    // var reverser = splitter.reverse();
    // var reversedString = reverser.join('');
    // return reversedString;
    return string.split('').reverse().join('');
  }
  
  function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }
    return 0;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  function assertArraysEqual(actual, expected, testName) {
    var areEqualLength = actual.length === expected.length;
    var areEqualItems = true;
    for (var i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        areEqualItems = false;
        break;
      }
    }
    if (areEqualLength && areEqualItems) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  // TESTS CASES
  //test for sort by ascending length
  var unsortedStringArray = ['walker', 'is', 'best', 'dog', 'everything'];
  var actualSorted = unsortedStringArray.sort(sortAscendingByLength);
  var expectedSorted = ['is', 'dog', 'best', 'walker', 'everything'];
  
  assertArraysEqual(actualSorted, expectedSorted, 'should return ascending string array from longest to smallest');
  
  
  //test for reversed string
  var inputString = 'walker';
  var actualReversed = reverseString(inputString);
  var expectedReversed = 'reklaw';
  
  assertEqual(actualReversed, expectedReversed, 'should return string in reversed order');
  
  
  //test for is palindrome
  var inputPalindrome = 'racecar';
  var actualPalindrome = isPalindrome(inputPalindrome);
  var expectedPalindrome = true;
  
  assertEqual(actualPalindrome, expectedPalindrome, 'should return true if input string is palindrome');
  
  //test for longest palindrome
  var sentence = 'laual mama hannah madam';
  var actualLongest = findLongestPalindrome(sentence);
  var expectedLongest = 'hannah';
  
  assertEqual(actualLongest, expectedLongest, 'should return longest palindrome string');
  