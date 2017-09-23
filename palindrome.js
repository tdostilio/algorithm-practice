function palindrome(str) {
    for (var i=0; i < str.length; i++) {
        for (var j=str.length-1; j > 0; j--) {
            if (str[i] != str[j]) {
                return str + " is NOT a palindrome";
            } else {
                i++;
            }
        };
    };
    return str + " IS a palindrome";
}

console.log(palindrome('kayak'));