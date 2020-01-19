const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt ('Enter password');

if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    console.log (message);
} else if (userInput === null) {
    message = 'Отменено пользователем!';
    console.log (message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log (message);
}
alert (message);

