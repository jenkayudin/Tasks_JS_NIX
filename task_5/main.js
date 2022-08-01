let firstNum = parseInt(prompt("Введите первое число"));

let secondNum = parseInt(prompt("Введите второе число"));

if(firstNum > secondNum) {
    alert(firstNum + secondNum);
}
else if (firstNum < secondNum){
    alert(firstNum * secondNum);
}
else if(firstNum == secondNum){
    alert("Числа одинаковые");
}