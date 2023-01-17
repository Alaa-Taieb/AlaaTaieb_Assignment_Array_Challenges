function alwaysHungry(arr) {
    var food = false;
    arr.forEach(element => {
        if(element == "food"){
            console.log("yummy");
            food = true;
        }
    });
    food ? true : console.log("I'm hungry");
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(element => {
        if(element > cutoff)
            filteredArr.push(element);
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]




function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum+= element;
    });
    var average = sum / arr.length;

    var count = 0
    arr.forEach(element => {
        if(element > average)
            count++;
    });
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4




function reverse(arr) {
    var iterations = Math.ceil(arr.length / 2);
    for(var i = 0; i <= iterations ; i++){
        var aux = arr[i];
        arr[i] = arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = aux;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]




function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 1 ; i < n-1 ; i++)
        fibArr.push(fibArr[i] + fibArr[i-1]);
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

