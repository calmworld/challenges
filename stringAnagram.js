// Minimum Number of Manipulations required to make two Strings
// Anagram Without Deletion of Character

/*
Given two strings s1 and s2, we need to find the minimum number of manipulations 
required to make two strings anagram without deleting any character. 

Note:- 
The anagram strings have same set of characters, sequence of characters can be different.

Examples: 

Input : 
       s1 = "aba"
       s2 = "baa"
Output : 0
Explanation: Both String contains identical characters

Input :
       s1 = "ddcf"
       s2 = "cedk"
Output : 2
Explanation : Here, we need to change two characters
in either of the strings to make them identical. We 
can change 'd' and 'f' in s1 or 'e' and 'k' in s2.


Assumption: Length of both the Strings is considered similar
*/

// Javascript program to find minimum number
// of manipulations required to make
// two strings identical



// Counts the no of manipulations required
function countManipulations(s1, s2) {
  let count = 0;

  // Store the count of character
  let char_count = new Array(26);
  for (let i = 0; i < char_count.length; i++) {
    char_count[i] = 0;
  }

  // Iterate though the first String and
  // update count
  for (let i = 0; i < s1.length; i++)
    char_count[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;

  // Iterate through the second string
  // update char_count.
  // If character is not found in char_count
  // then increase count
  for (let i = 0; i < s2.length; i++) {
    char_count[s2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; ++i) {
    if (char_count[i] != 0) {
      count += Math.abs(char_count[i]);
    }
  }
  // console.log(count);
  return count;
}


// Driver code
let s1 = "ddcf";
let s2 = "cedk";

console.log(countManipulations(s1, s2));

// Output => 4
