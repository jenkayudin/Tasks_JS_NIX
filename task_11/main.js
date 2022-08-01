function arraysDiff(arr1, arr2){
    let res1 = 1;
    let res2 = 1;
    for(let i=0; i < arr1.length; i++){
        res1 *= arr1[i];
    }
    for(let i=0; i < arr2.length; i++){
        res2 *= arr2[i];
    }
    return res1-res2;
}

console.log(arraysDiff([3, 2, 5], [1, 4, 4]));