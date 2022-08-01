function remove(str, num){
    str = str.split("");
    let i = 0;
    while(true){
        if(i>=str.length){
            break;
        }
        if(str[i]=='!' && num > 0){
            str.splice(i, 1);
            i--;
            num--;
        }
        i++;
    }
    str = str.join("");
    return str;
}
