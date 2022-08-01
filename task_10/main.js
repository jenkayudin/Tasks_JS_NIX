const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];

function sortNames(arr){
    let res = arr.filter(function(f){
        let flag = true;
        for(let j=0; j < unwantedNames.length; j++){
            if(f===unwantedNames[j]){
                flag = false;
                break;
            }
        }
        return flag;
    });
    return res;
}
