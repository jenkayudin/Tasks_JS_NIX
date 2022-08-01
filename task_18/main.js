function spacey(arr){
    let str = '';
    let res = [];
    for(let i=0; i < arr.length; i++){
        str += arr[i];
        res.push(str);
    }
    return res;
}