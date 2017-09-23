function uniqueString(string) {
    counter = {};
    for (var i = 0; i < string.length; i++) {
        if (string[i] in counter) {
            return "FAIL: " + string[i] + " is not a unique character";
        } else {
            counter[string[i]] = 1;
        };
    }
    return "PASS: every character is unique";
}

console.log(uniqueString('test'));