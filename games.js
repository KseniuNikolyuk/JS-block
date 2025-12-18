function NumberGame() {
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
