function arrMultiply(arr){
    let res = 1;
    for(let i=0; i < arr.length; i++){
        res = res * arr[i];
    }
    return res;
}


let array = [1,2,3,4];

console.log(arrMultiply(array));