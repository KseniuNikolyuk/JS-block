// Задание 1
const str1 = 'js';
const upperStr = str1.toUpperCase();
console.log(upperStr);

// Задание 2
function filterStringsByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(str => 
        str.toLowerCase().startsWith(lowerPrefix)
    );
}

// Задание 3
const number3 = 32.58884;
const floorResult = Math.floor(number3);
const ceilResult = Math.ceil(number3);
const roundResult = Math.round(number3);
console.log(`До меньшего: ${floorResult}`);
console.log(`До большего: ${ceilResult}`);
console.log(`До ближайшего: ${roundResult}`);

// Задание 4
const numbers4 = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers4);
const maxValue = Math.max(...numbers4);
console.log(`Минимальное: ${minValue}`);
console.log(`Максимальное: ${maxValue}`);

// Задание 5
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    return randomNum;
}

// Задание 6
function generateRandomArray(n) {
    const arrayLength = Math.floor(n / 2);
    const result = [];
    for (let i = 0; i < arrayLength; i++) {
        result.push(Math.floor(Math.random() * (n + 1))); 

    }
    return result;
}


// Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Задание 8
const currentDate8 = new Date();
console.log(currentDate8);

// Задание 9
const currentDate9 = new Date();
currentDate9.setDate(currentDate9.getDate() + 73);
console.log(`Дата через 73 дня: ${currentDate9}`);

// Задание 10
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

