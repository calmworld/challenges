function palindrome(str) {
    if (str.length === "") {
        return 
    }
    let result = str.toLowerCase().replace(/[W_]/g, "");
    return result === [...result].reverse().join("");
}