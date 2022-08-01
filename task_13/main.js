const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function hexToDec(num){
    let res = 0;
    for(let i = 0; i < num.length; i++){
        res += nums.indexOf(num[i].toUpperCase())*Math.pow(16, (num.length-1)-i);
    }
    return res;
}
