function maxDiff(arr){
    if(arr.length < 2){
        return 0;
    }
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
}
