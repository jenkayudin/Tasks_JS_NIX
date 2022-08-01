function switcheroo(str){
    str = str.split('');
    for(let i=0; i < str.length; i++){
        if(str[i]=='a'){
            str[i] = 'b';
        }
        else if(str[i] == 'b'){
            str[i] = 'a';
        }
    }
    str = str.join('');
    return str;
}

console.log(switcheroo('aaabcccbaaa'));