function evensAndOdds(num){
    res = [];
    if(num%2==0){
        while(true){
            if(num==0){
                res.push('0');
                break;
            }
            if(num==1){
                res.push('1');
                break;
            }
            if(num%2==0){
                res.push('0');
                num /= 2;
            }
            else{
                res.push('1');
                num -= 1;
                num /= 2;
            }
        }
        res = res.reverse();
        res = res.join('');
    }
    else{
        const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        while(true){
            if(num==0){
                break;
            }
            res.push(nums[num%16]);
            num -= num%16;
            num /= 16;
        }
        res = res.reverse();
        res = res.join('')
    }
    return res;
}
