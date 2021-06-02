function palindrome(str) {
    let result = str.toLowerCase().replace(/[W_]/g, "");
    return result === [...result].reverse().join("");
}

console.log(palindrome('nursesrun'));
console.log(palindrome('nurses run'));