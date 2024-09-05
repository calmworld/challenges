function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    let search = new Set();
    for (const i of ar) {
        if (search.has(i)) {
            count++;
            search.delete(i);
        } else {
            search.add(i)
        }
    }
    return count;
}


let n = 7;
let ar = [2, 4, 7, 4, 2, 8, 8];

console.log(sockMerchant(n, ar)); // 3