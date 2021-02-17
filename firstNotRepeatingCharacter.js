//Given a string s consisting of small English letters, 
//find and return the first instance of a non-repeating character in it. 
//If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (s.indexOf(char) == i && s.indexOf(char, i+1) == -1) {
            return char
        }
    }
    return '_'
}


let str1 = "abacabad" // returns 'c'
console.log(firstNotRepeatingCharacter(str1))
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first

let str2 = "abacabaabacaba" // returns '_'
console.log(firstNotRepeatingCharacter(str2))
// There are no characters in this string that do not repeat.

let str3 = "abacabakabacaba" // returns 'k'
console.log(firstNotRepeatingCharacter(str3))