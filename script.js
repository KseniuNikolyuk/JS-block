// ЗАДАНИЕ 1
// Скрытие и показ текста
const heading1 = document.querySelector('#heading1');
const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', function() {
    if (heading1.style.display === 'none') {
        heading1.style.display = 'block';
        toggleBtn.textContent = 'Скрыть текст';
    } else {
        heading1.style.display = 'none';
        toggleBtn.textContent = 'Показать текст';
    }
});

// ЗАДАНИЕ 2
// Изменение цвета текста
const colorText = document.querySelector('#colorText');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', function() {
    colorText.style.color = 'blue';
});

// ЗАДАНИЕ 3
// Изменение текста
const changeText = document.querySelector('#changeText');
const changeTextBtn = document.querySelector('#changeTextBtn');

changeTextBtn.addEventListener('click', function() {
    changeText.textContent = 'Привет, мир!';
});

// ЗАДАНИЕ 4
// Поиск и изменение всех элементов по классу description
const changeAllBtn = document.querySelector('#changeAllBtn');

changeAllBtn.addEventListener('click', function() {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(item) {
        item.textContent = 'Измененный текст';
    });
});

// ЗАДАНИЕ 5
// Работа с querySelectorAll для элементов с классом desc
const changeDescBtn = document.querySelector('#changeDescBtn');

changeDescBtn.addEventListener('click', function() {
    const descElements = document.querySelectorAll('.desc');
    descElements.forEach(function(item) {
        item.textContent = 'Новый текст';
    });
});

// ЗАДАНИЕ 6
// Добавление нового элемента в DOM
const addElementBtn = document.querySelector('#addElementBtn');

addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph); 
});

// ЗАДАНИЕ 7
// Удаление первого элемента с классом descForDelete
const deleteElementBtn = document.querySelector('#deleteElementBtn');

deleteElementBtn.addEventListener('click', function() {
    const firstElement = document.querySelector('.descForDelete');
    if (firstElement) {
        firstElement.remove();
    }
}); 