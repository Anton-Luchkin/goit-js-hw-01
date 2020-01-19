let credits = 23580;
const pricePerDroid = 3000;

const userInput = prompt ('How many droids do you need?');

if (userInput === null) {
    console.log('Отменено пользователем!');
}

let totalPrice = userInput * pricePerDroid;

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else if (totalPrice <= credits){
    credits = credits - totalPrice;
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`);
}


