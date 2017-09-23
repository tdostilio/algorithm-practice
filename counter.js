function counter(array) {
    numbers = {};
    for (var i=0; i < array.length; i++) {
        if (array[i] in numbers) {
            numbers[array[i]]++;
        } else {
            numbers[array[i]]=1;
        }
    }
    return numbers;
}


console.log(counter([1,2,4,5,3,2,3,4,5,3,5,]));