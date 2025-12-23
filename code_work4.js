// ЗАДАНИЕ 1
function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(findMin(8, 4)); // 4
console.log(findMin(6, 6)); // 6

// ЗАДАНИЕ 2
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(checkEvenOdd(4)); // "Число четное"
console.log(checkEvenOdd(7)); // "Число нечетное"

// ЗАДАНИЕ 3
function printSquare(num) {
    console.log(num * num);
}
function getSquare(num) {
    return num * num;
}
printSquare(5);
let squareResult = getSquare(5);
console.log("Квадрат числа:", squareResult);

// ЗАДАНИЕ 4
function checkAge() {
    let age = prompt("Сколько вам лет?");
    age = Number(age);
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}
checkAge();

// ЗАДАНИЕ 5
function multiplyNumbers(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}
console.log(multiplyNumbers(5, 3));
console.log(multiplyNumbers("abc", 3));

// ЗАДАНИЕ 6
function calculateCube() {
    let input = prompt("Введите число:");
    let number = Number(input);
    
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        let cube = number * number * number;
        return `${number} в кубе равняется ${cube}`;
    }
}

function testCube(number) {
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        let cube = number * number * number;
        return `${number} в кубе равняется ${cube}`;
    }
}

console.log("Проверка возведения в куб от 0 до 10:");
for (let i = 0; i <= 10; i++) {
    console.log(testCube(i));
}

// ЗАДАНИЕ 7
let circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

let circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Circle1 площадь:", circle1.getArea());
console.log("Circle1 периметр:", circle1.getPerimeter());
console.log("Circle2 площадь:", circle2.getArea());
console.log("Circle2 периметр:", circle2.getPerimeter());