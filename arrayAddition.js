function arrayAddition(arr) {
    var maxIndex;
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            maxIndex = i;
            max = arr[i];
        }
    }
    arr.splice(maxIndex, 1);
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    if (max === sum) {
        return true;
    } else {
        return false;
    }
} 

console.log(arrayAddition([1,2,3,12,6]));
