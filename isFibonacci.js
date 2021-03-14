function isFibonacci(n) {
    var fib,
      a = (5 * Math.pow(n, 2) + 4),
      b = (5 * Math.pow(n, 2) - 4)
  
    var result = Math.sqrt(a) % 1 == 0,
      res = Math.sqrt(b) % 1 == 0;
  
    //fixed this line
    if (result || res == true) // checks the given input is fibonacci series
    {
      fib = Math.round(n * 1.618); // finds the next fibonacci series of given input
      console.log("The next Fibonacci number is " + fib);
  
    } else {
      console.log(`The given number ${n} is not a fibonacci number`);
    }
}
  
  // $('#fib').on("keyup change", function() {
  //   isFibonacci(+this.value)
  // })
  
  isFibonacci(2)

  isFibonacci(12)