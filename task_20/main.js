function types(arr){
    let object = {};
    for(let i=0; i < arr.length; i++){
        object[`${typeof(arr[i])}`] = [];

    }
    for(let i=0; i < arr.length; i++){
        object[`${typeof(arr[i])}`].push(arr[i]);
    }
    return object;
}




