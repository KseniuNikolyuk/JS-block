// Задание 1
const numbers1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
    if (numbers1[i] === 10) {
        break;
    }
}

// Задание 2
const numbers2 = [1, 5, 4, 10, 0, 3];
const indexOfFour = numbers2.indexOf(4);
console.log(indexOfFour);

// Задание 3
const numbers3 = [1, 3, 5, 10, 20];
const joinedString = numbers3.join(' ');
console.log(joinedString);

// Задание 4
const resultArray = [];
for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    resultArray.push(innerArray);
}
console.log(resultArray);

// Задание 5
const originalArray = [1, 1, 1];
originalArray.push(2, 2, 2);
console.log(originalArray);

// Задание 6
const mixedArray = [9, 8, 7, 'a', 6, 5];
mixedArray.sort((a, b) => a - b);
const filteredArray = mixedArray.filter(item => typeof item === 'number');
console.log(filteredArray);

// Задание 7
const numbersArray7 = [9, 8, 7, 6, 5];
const userGuess = prompt("Угадайте число от 5 до 9");
const guessedNumber = parseInt(userGuess);
if (numbersArray7.includes(guessedNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8
const originalString = 'abcdef';
const reversedString = originalString.split('').reverse().join('');
console.log(reversedString);

// Задание 9
const nestedArray = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = [...nestedArray[0], ...nestedArray[1]];
console.log(flattenedArray);

// Задание 10
const randomNumbers = [3, 7, 2, 9, 4, 6];
for (let i = 0; i < randomNumbers.length - 1; i++) {
    const sum = randomNumbers[i] + randomNumbers[i + 1];
    console.log(sum);
}

// Задание 11
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}
const numbers11 = [2, 4, 6, 8];
const squaredNumbers = squareNumbers(numbers11);
console.log(squaredNumbers);

// Задание 12
function getWordLengths(words) {
    return words.map(word => word.length);
}
const wordsArray = ["apple", "banana", "cherry"];
const lengthsArray = getWordLengths(wordsArray);
console.log(lengthsArray);

// Задание 13
function filterNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}
const numbers13 = [1, -2, 3, -4, 5, -6];
const negativeNumbers = filterNegativeNumbers(numbers13);
console.log(negativeNumbers);

// Задание 14
const randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 11));
}
const evenNumbers = randomArray.filter(num => num % 2 === 0);
console.log("Исходный массив:", randomArray);
console.log("Четные числа:", evenNumbers);

// Задание 15
const randomNumbers15 = [];
for (let i = 0; i < 6; i++) {
    randomNumbers15.push(Math.floor(Math.random() * 10) + 1);
}
const sum = randomNumbers15.reduce((total, num) => total + num, 0);
const average = sum / randomNumbers15.length;
console.log("Массив:", randomNumbers15);
console.log("Среднее арифметическое:", average);