function swap(var1, var2) {
    var tmp = var1;
    var1 = var2;
    var2 = tmp;
    return [var1, var2];
}

console.log(swap(1,2));
