// Работа с кодом 1 дз


// let a = 10
// alert (a)

// a = 20
// alert(a)

// let iPhone = 2007
// alert(iPhone)

// let JSname = "Брендан Эйх"
// alert(JSname)

// let b = 10
// let c = 2

// alert(c+b)
// alert(b-c)
// alert(b*c)
// alert(b/c)

// let result = 2**5
// alert(result)

// let A = 9
// let B = 2

// alert(A%B)

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// let age = prompt('Сколько вам лет?')
// alert(age)

// let user = { name: 'JaneDou', 
//     age: 20, 
//     isAdmin: True };

// let userName = prompt('Ваше имя:')
// alert(`Привет, ${userName}!`)





// // Работа с кодом 2 дз

// // Задание 1

// let password = 'кошки';
// let ask = prompt('Введите пароль')
// if (ask === password){
//     alert('Пароль введен верно')
// } else {
//     alert('Пароль введен неправильно')
// }


// // Задание 2

// let c = 11
// if (c > 0 && c < 10){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// // Задание 3

// let d = 15
// let e = 9
// if (d > 100 || e > 100){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// // Задание 4 

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

// // Задание 5
// let season = prompt('Введите номер месяц в году')
// let monthNumber = parseInt(season);

// if (monthNumber >= 1 && monthNumber <= 12){
//     switch (monthNumber){
//         case 12:
//         case 1:
//         case 2:
//             console.log('Зима')
//             break
//         case 3:
//         case 4:
//         case 5:
//             console.log('Весна')
//             break
//         case 6:
//         case 7:
//         case 8:
//             console.log('Лето')
//             break
//         case 9:
//         case 10:
//         case 11:
//             console.log('Осень')
//             break
//         default:
//             console.log("Неверный номер месяца");
//     }
// }



// // Работа с кодом 3 дз

// // Задание 1 
// let kol = 1

// while (kol < 3) {
//     alert("Привет!");
//     kol++
// }

// // Задание 2 
// let i = 1;

// while (i < 6) {
//     console.log(i)
//     i++;
// }

// // // Задание 3 
// let p = 7;

// do {
//     console.log(p)
//     p++;
// } while (p<23)


// // Задание 4

// const obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400'
// }

// for (let key in obj) {
//     console.log (`${key} — зарплата ${obj[key]} долларов.`)
// }

// // Задание 5

// let n = 1000
// let num = 0

// while (n>50) {
//     n = n/2
//     console.log (n)
//     num++
// }

// console.log(`Итоговое число: ${n}`)
// console.log(`Итераций: ${num}`)

// // Задание 6
// let firstFriday = 6;

// for (let day = firstFriday; day <= 31; day += 7) {
//     console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
// }



// // Работа с кодом 4 дз
// // Задание 1

// function minNumber(a, b) {
//     if (a < b) {
//         console.log (a);
//     } else {
//         console.log (b);
//     }
// }

// minNumber(8, 4)

// // Задание 2

// function count(c) {
//     if (c % 2 === 0) {
//         console.log ('Число четное');
//     } else {
//         console.log ('Число нечетное');
//     }
// }

// count (5)

// // Задание 3

// function printSquare(num) {
//     console.log(num * num);
// }

// printSquare (3)

// // Задание 4
 
// function checkAge() {
//     let age = prompt("Сколько вам лет?");
//     if (age === null) {
//         return; 
//     } age = Number(age);
//     if (isNaN(age) || age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//         alert('Привет, друг!');
//     } else if (age >= 13) {
//         alert('Добро пожаловать!');
//     }
// }

// // Задание 5

// function multiplyNumbers(a, b) {
//     const num1 = Number(a);
//     const num2 = Number(b);
//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     }
//     return num1 * num2;
// }

// // Задание 6

// function cubeNumber() {
//     let input = prompt("Введите число:");
//     let num = Number(input);
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     }
//     let cube = num * num * num;
//     return `${num} в кубе равняется ${cube}`;
// }

// // Задание 7 

// const circle1 = {
//     radius: 5,
    
//     getArea: function() {
//         return Math.PI * this.radius * this.radius;
//     },
    
//     getPerimeter: function() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// const circle2 = {
//     radius: 10,
    
//     getArea: function() {
//         return Math.PI * Math.pow(this.radius, 2);
//     },
    
//     getPerimeter: function() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// // Работа с кодом дз 5

// // Задание 1 
// const numbers1 = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers1.length; i++) {
//     console.log(numbers1[i]);
//     if (numbers1[i] === 10) {
//         break;
//     }
// }

// // Задание 2
// const numbers2 = [1, 5, 4, 10, 0, 3];
// const indexOfFour = numbers2.indexOf(4);
// console.log(`Индекс значения 4: ${indexOfFour}`);

// // Задание 3
// const numbers3 = [1, 3, 5, 10, 20];
// console.log(`Элементы через пробел: ${numbers3.join(' ')}`);

// // Задание 4
// const array4 = [];
// for (let i = 0; i < 3; i++) {
//     const innerArray = [];
//     for (let j = 0; j < 3; j++) {
//         innerArray.push(1);
//     }
//     array4.push(innerArray);
// }
// console.log("Многомерный массив:", array4);

// // Задание 5
// const array5 = [1, 1, 1];
// console.log("Исходный массив:", array5);
// array5.push(2, 2, 2);
// console.log("Массив после добавления:", array5);

// // Задание 6
// let arr6 = [9, 8, 7, 'a', 6, 5];
// console.log("Исходный массив:", arr6);
// arr6.sort();
// console.log("После sort():", arr6);
// const indexOfA = arr6.indexOf('a');
// if (indexOfA !== -1) {
//     arr6.splice(indexOfA, 1);
// }
// console.log("После удаления 'a':", arr6);

// // Задание 7
// const nums = [9, 8, 7, 6, 5];
// const userInput = prompt("Угадайте одно из чисел: 5, 6, 7, 8 или 9");

// if (userInput === null) {
//     alert("Вы отменили игру");
// } else {
//     const guess = Number(userInput);
    
//     if (isNaN(guess)) {
//         alert("Нужно ввести число!");
//     } else {
//         let found = false;
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === guess) {
//                 found = true;
//                 break;
//             }
//         }
        
//         if (found) {
//             alert("Угадал!");
//         } else {
//             alert("Не угадал!");
//         }
//     }
// }

// // Задание 8
// const str = 'abcdef';
// console.log("Исходная строка:", str);
// const reversedStr = str.split('').reverse().join('');
// console.log("Перевернутая строка:", reversedStr);

// // Задание 9
// const array9 = [[1, 2, 3], [4, 5, 6]];
// console.log("Исходный массив:", array9);
// const flatArray = [].concat(...array9);
// console.log("Преобразованный массив (spread):", flatArray);

// // Задание 10
// const numbers10 = [];
// for (let i = 0; i < 10; i++) {
//     numbers10.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log("Созданный массив:", numbers10);
// for (let i = 0; i < numbers10.length - 1; i++) {
//     const current = numbers10[i];
//     const next = numbers10[i + 1];
//     const sum = current + next;
//     console.log(`Элемент ${i}: ${current} + элемент ${i + 1}: ${next} = ${sum}`);
// }

// // Задание 11
// function squaresSimple(numbers) {
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * numbers[i]);
//     }
//     return result;
// }
// console.log("Квадраты [2, 3, 4]:", squaresSimple([2, 3, 4]));

// // Задание 12
// function lengthsSimple(words) {
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         result.push(words[i].length);
//     }
//     return result;
// }
// console.log('Длины ["cat", "dog"]:', lengthsSimple(["cat", "dog"]));

// // Задание 13
// function negativesSimple(numbers) {
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// }
// console.log("Отрицательные из [1, -1, 2, -2]:", negativesSimple([1, -1, 2, -2]));

// // Задание 14
// let arr14 = [];
// for (let i = 0; i < 10; i++) {
//     arr14.push(Math.floor(Math.random() * 11));
// }
// let evens = [];
// for (let i = 0; i < arr14.length; i++) {
//     if (arr14[i] % 2 === 0) {
//         evens.push(arr14[i]);
//     }
// }
// console.log("Массив:", arr14);
// console.log("Четные числа:", evens);

// // Задание 15
// let arr15 = [];
// for (let i = 0; i < 6; i++) {
//     arr15.push(Math.floor(Math.random() * 10) + 1);
// }
// let sum = 0;
// for (let i = 0; i < arr15.length; i++) {
//     sum += arr15[i];
// }
// let average = sum / arr15.length;
// console.log("Массив:", arr15);
// console.log("Среднее:", average.toFixed(2));
