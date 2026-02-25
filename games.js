// Мини-игра "Угадай число"
function Game1() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    while(true) {
        let guess = prompt("Введите число от 1 до 100:")
        guess = Number(guess);

        if (userChoice === null) {
            alert("Игра отменена. Возвращаюсь на главную!");
            return;
        }
        if (guess === secretNumber) {
            alert("Поздравляю! Вы угадали число. Игра завершена")
            break
        } else if (guess > secretNumber) {
            alert ("Попробуй снова) Слишком много")
        } else if (guess < secretNumber) {
            alert ("Слишком большое! Попробуйте меньше.")
        }
    }
}

// Мини-игра "Простая арифметика"
function Game2() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    
    let operation;
    let operationType = Math.floor(Math.random() * 4);
    
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
        alert('✅ Правильно!\n' + problem + ' = ' + correctAnswer);
    } else {
        alert('❌ Неправильно.\n' + problem + ' = ' + correctAnswer + '\nВаш ответ: ' + userAnswer);
    }
}

// Мини-игра "Переверни текст"
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
    
    alert(`Оригинальный текст: ${userText}\nПеревернутый текст: ${reversedText}`);
}

// Мини-игра "Камень, ножницы, бумага"
function Game4() {
    const options = ["камень", "ножницы", "бумага"];
    
    let userChoice = prompt("Добро пожаловать в игру 'Камень, ножницы, бумага'!\n\n" +
          "Правила:\n" +
          "• Камень побеждает ножницы (камень тупит ножницы)\n" +
          "• Ножницы побеждают бумагу (ножницы режут бумагу)\n" +
          "• Бумага побеждает камень (бумага оборачивает камень)\n" +
          "• Одинаковые варианты - ничья\n\n" +
          "Введите один из вариантов: камень, ножницы или бумага");
    
    if (userChoice === null) {
        alert("Игра отменена!");
        return;
    }
    
    userChoice = userChoice.toLowerCase().trim();
    
    if (userChoice === "1") {
        userChoice = "камень";
    } else if (userChoice === "2") {
        userChoice = "ножницы";
    } else if (userChoice === "3") {
        userChoice = "бумага";
    }
    
    if (!options.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, выберите 'камень', 'ножницы' или 'бумага'.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[randomIndex];
    
    let result;
    
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
    
    let resultMessage = `Ваш выбор: ${userChoice}\n`;
    resultMessage += `Выбор компьютера: ${computerChoice}\n\n`;
    resultMessage += `${result}`;
    
    alert(resultMessage);
}

// Мини-игра "Викторина"
function Game5() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 1
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 3
        }
    ];
    
    let score = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}: ${currentQuestion.question}\n\n`;
        questionText += currentQuestion.options.join('\n');
        questionText += "\n\nВведите номер правильного ответа (1, 2 или 3)";
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина отменена!");
            return;
        }
        
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            alert("✅ Правильно! Молодец!");
        } else {
            let correctOption = currentQuestion.options[currentQuestion.correctAnswer - 1];
            alert(`❌ Неправильно. Правильный ответ: ${correctOption}`);
        }
    }

    alert(`Викторина окончена!\n\nВы правильно ответили на ${score} из ${quiz.length} вопросов.`);
}

// Мини-игра "Генератор случайных цветов"
function Game6() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const gamesSection = document.querySelector('.games-section');
    if (gamesSection) {
        gamesSection.style.backgroundColor = randomColor;
    }
}