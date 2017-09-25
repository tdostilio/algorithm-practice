function factorial(n) {
    //Base Case:
    if (n === 0) {
        return 1;
    }
    //Factorial
    return n * factorial(n-1);
};

console.log(factorial(5));