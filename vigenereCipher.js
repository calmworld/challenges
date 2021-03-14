/*
Caesar's cipher takes a word and encrypts it by offsetting each letter in
the word by a fixed number, the key. For a key of 3, for example:
a -> d, p -> s, and y -> b

Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
of keys is used. For example, if we encrypt "bananasinpajamas" with the
key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":

Word:   b a n a n a s i n p a j a m a s
Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
Cipher: c c q b p d t k q q c m b o d t

Write a funcition vigenereCipher(string, keySequence, alphabet) that takes a
string and a key-sequence, returning the encrypted word.

We're giving you the alphabet as an array if you need it:

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

Examples:
vigenereCipher("toerrishuman", [1], alphabet) => "upfssjtivnbo"
vigenereCipher("toerrishuman", [1, 2], alphabet) => "uqftsktjvobp"
vigenereCipher("toerrishuman", [1, 2, 3], alphabet) => "uqhstltjxncq"
*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 

function vigenereCipher(string, keySequence, alphabet) {
  var ciphered = '';

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var offSet = keySequence[i % keySequence.length];
    var oldIndex = alphabet.indexOf(char);
    var newIndex = oldIndex + offSet;
    ciphered += alphabet[newIndex % alphabet.length];
  }

  return ciphered;
}


// function vigenereCipher(string, keySequence, alphabet){
//   var newString = '';
  
//   for (var i = 0; i < string.length; i++){
//     var char = string[i];
//     var key = alphabet.indexOf(char) + keySequence[i % keySequence.length]; // 19 + keySequence[0] = 1 => 19 + 1 = 20
    
//     newString += alphabet[key % alphabet.length];
//   }
  
//   return newString;
// }


let input1 = vigenereCipher("toerrishuman", [1], alphabet);
console.log(input1); //=> "upfssjtivnbo"


let input2 = vigenereCipher("toerrishuman", [1, 2], alphabet);
console.log(input2); //=> "uqftsktjvobp"


let input3 = vigenereCipher("toerrishuman", [1, 2, 3], alphabet);
console.log(input3); //=> "uqhstltjxncq"