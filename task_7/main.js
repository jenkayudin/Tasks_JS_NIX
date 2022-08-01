let weight;
let recommendation;
function recommendationForWeight(weight) {
    if(weight<4){
        return "Пора перекусить";
    }
    else if(weight<=5.5 && weight>=4){
        return 'Вес в норме';
    }
    else if(weight>5.5){
        return 'Пора на тренировку';
    }
}

weight = 1;

recommendation = recommendationForWeight(weight);

console.log(recommendation);

weight = 3;

recommendation = recommendationForWeight(weight);

console.log(recommendation);

weight = 4;

recommendation = recommendationForWeight(weight);

console.log(recommendation);

weight = 5;

recommendation = recommendationForWeight(weight);

console.log(recommendation);

weight = 10;

recommendation = recommendationForWeight(weight);

console.log(recommendation);
