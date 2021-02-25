function sum(num1, num2) {
    let total = num1 + num2;
    let countdown = total;
    while (countdown > 0) {
        countdown--;
        console.log(countdown);
    }
    return "The Total sum is: " + total;
}

console.log(sum(5, 7))

console.log(sum(8, 15))