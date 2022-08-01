function divisibleByThree(num){
    if(num<0){
        num *= (-1);
    }
    let res = 0;
    if(num==3 || num==6 || num==9){
        return true;
    }
    else if (num<10 && num!=3 && num!=6 && num!=9){
        return false;
    }
    for(let i = 0; i < num.length; i++){
        res += parseInt(num[i]);
    }
    if(divisibleByThree(String(res)) == true){
        return true;
    }
    else{
        return false;
    }
}