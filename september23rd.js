function factorial(num) {
    for (var i = num-1; i > 0; i--) {
         num *= i;
    }
    return num
}


console.log(factorial(5));