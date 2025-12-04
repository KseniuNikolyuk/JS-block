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



// Работа с кодом 3 дз

// Задание 1 
let kol = 1

while (kol < 3) {
    alert("Привет!");
    kol++
}

// Задание 2 
let i = 1;

while (i < 6) {
    console.log(i)
    i++;
}

// // Задание 3 
let p = 7;

do {
    console.log(p)
    p++;
} while (p<23)


// Задание 4

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log (`${key} — зарплата ${obj[key]} долларов.`)
}

// Задание 5

let n = 1000
let num = 0

while (n>50) {
    n = n/2
    console.log (n)
    num++
}

console.log(`Итоговое число: ${n}`)
console.log(`Итераций: ${num}`)

// Задание 6
let firstFriday = 6;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}