// // Задание 1
// console.log('js'.toUpperCase());

// // Задание 2
// function filterByPrefix(arr, prefix) {
//   const lowerPrefix = prefix.toLowerCase();
//   return arr.filter(item => 
//     item.toLowerCase().startsWith(lowerPrefix)
//   );
// }

// console.log(filterByPrefix(['Кошка', 'кот', 'Собака', 'котенок'], 'кот'));

// // Задание 3
// const num = 32.58884;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// // Задание 4
// const numbers = [52, 53, 49, 77, 21, 32];

// console.log(Math.min(...numbers)); 
// console.log(Math.max(...numbers)); 

// // Задание 5
// function getRandomNumber() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// console.log(getRandomNumber());

// // Задание 6
// function generateRandomArray(n) {
//   const length = Math.floor(n / 2);
//   const result = [];
  
//   for (let i = 0; i < length; i++) {
//     result.push(Math.floor(Math.random() * (n + 1)));
//   }
  
//   return result;
// }

// console.log(generateRandomArray(10));

// // Задание 7
// function getRandomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInRange(5, 15)); 

// // Задание 9
// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 73);

// console.log(futureDate);

// // Задание 10
// function formatDate(date) {
//   const months = [
//     'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//     'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
//   ];
  
//   const days = [
//     'воскресенье', 'понедельник', 'вторник', 'среда',
//     'четверг', 'пятница', 'суббота'
//   ];
  
//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const dayOfWeek = days[date.getDay()];
  
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
  
//   return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }

// console.log(formatDate(new Date()));