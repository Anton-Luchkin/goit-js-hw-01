const China = "КИТАЙ";
const creditsChina = 100;
const Chile = "ЧИЛИ";
const creditsChile = 250;
const Australia = "АВСТРАЛИЮ";
const creditsAustralia = 170;
const India = "ИНДИЮ";
const creditsIndia = 80;
const Jamaica = "ЯМАЙКУ";
const creditsJamaica = 120;

const userInput = prompt("Укажите страну доставки");
const normalizedInput = userInput.toUpperCase();

switch (normalizedInput) {
  case "КИТАЙ":
    console.log(`Доставка в ${China} будет стоить ${creditsChina} кредитов`);
    break;

  case "ЧИЛИ":
    console.log(`Доставка в ${Chile} будет стоить ${creditsChile} кредитов`);
    break;

  case "АВСТРАЛИЯ":
    console.log(`Доставка в ${Australia} будет стоить ${creditsAustralia} кредитов`);
    break;

  case "ИНДИЯ":
    console.log(`Доставка в ${India} будет стоить ${creditsIndia} кредитов`);
    break;

  case "ЯМАЙКА":
    console.log(`Доставка в ${Jamaica} будет стоить ${creditsJamaica} кредитов`);
    break;

  default:
    alert ("В вашей стране доставка не доступна");
}
