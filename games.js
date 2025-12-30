function Game1() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    while(true) {
        let guess = prompt("Угадай число от 1 до 100.")
        guess = Number(guess);
        if (guess === secretNumber) {
            alert("Поздравляю! Ты угадал(а). Игра завершена")
            break
        } else if (guess > secretNumber) {
            alert ("Попробуй снова) Слишком много")
        } else if (guess < secretNumber) {
            alert ("Попробуй снова! Слишком мало")
        }
    }
}

function Game2() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    
    let operation;
    let operationType = Math.floor(Math.random() * 4); // 0, 1, 2 или 3
    
    if (operationType === 0) {
        operation = '+';
    } else if (operationType === 1) {
        operation = '-';
    } else if (operationType === 2) {
        operation = '*';
    } else {
        operation = '/';
    }

    if (operation === '-' && num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    if (operation === '÷') {
        num1 = num1 * num2;
    }
    
    let problem = num1 + ' ' + operation + ' ' + num2;
    
    let correctAnswer;
    if (operation === '+') {
        correctAnswer = num1 + num2;
    } else if (operation === '-') {
        correctAnswer = num1 - num2;
    } else if (operation === '*') {
        correctAnswer = num1 * num2;
    } else { 
        correctAnswer = num1 / num2;
    }

    let userAnswer = prompt('Решите пример:\n' + problem + ' = ?');

    if (userAnswer === null) {
        alert('Игра отменена!');
        return;
    }

    let userAnswerNumber = Number(userAnswer);

    if (isNaN(userAnswerNumber)) {
        alert('Пожалуйста, вводите только числа!');
    } 
    else if (userAnswerNumber === correctAnswer) {
        alert('Правильно!\n' + problem + ' = ' + correctAnswer);
    } else {
        alert('Неправильно!\n' + problem + ' = ' + correctAnswer + '\nВаш ответ: ' + userAnswer);
    }
}