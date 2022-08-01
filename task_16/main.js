function strToWords(str, num){
    let res = [];
    str = str.replace(/[^a-zа-яё\s]/gi, '');
    str = str.split(' ');
    for(let i=0; i < str.length; i++){
        if(str[i].length > num){
            res.push(str[i]);
        }
    }
    return res;
}
