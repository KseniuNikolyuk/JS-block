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

function Game3() {
    let userText = prompt("Введите текст, который нужно перевернуть:");
    
    if (userText === null) {
        alert("Игра отменена!");
        return;
    }
    
    if (userText.trim() === "") {
        alert("Вы не ввели текст!");
        return;
    }
    
    let reversedText = userText.split('').reverse().join('');
    
    alert(`Исходный текст: ${userText}\nПеревернутый текст: ${reversedText}`);
}

function Game5() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Синего", "2. Красного", "3. Желтого"],
            correctAnswer: 1
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Шесть", "3. Пять"],
            correctAnswer: 3
        }
    ];
    
    let score = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}: ${currentQuestion.question}\n\n`;
        questionText += currentQuestion.options.join('\n');
        questionText += "\n\nВведите номер правильного ответа:";
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина отменена!");
            return;
        }
        
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            alert("Правильно! ✓");
        } else {
            let correctOption = currentQuestion.options[currentQuestion.correctAnswer - 1];
            alert(`Неправильно! Правильный ответ: ${correctOption}`);
        }
    }

    alert(`Викторина завершена!\n\nВы правильно ответили на ${score} из ${quiz.length} вопросов.`);
}
