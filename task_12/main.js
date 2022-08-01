function startEnd(a,b){
    let arr = [];
    let i = a;
    while(true){
        if(i > b){
            break;
        }
        arr.push(i);
        i++;
    }
    return arr;
}