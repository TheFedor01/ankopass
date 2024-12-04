// Получение элементов
const startButton = document.getElementById('startButton');
const startContainer = document.getElementById('startContainer');
const codeContainer = document.getElementById('codeContainer');
const mainAudio = document.getElementById('mainAudio');
const snakeAudio = document.getElementById('snakeAudio');
const input = document.getElementById('codeInput');
const message = document.getElementById('message');
const dotsContainer = document.getElementById('dotsContainer');
const gameContainer = document.getElementById('gameContainer');
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

// Настройки игры
let snake = [{ x: 10, y: 10 }];
let direction = 'RIGHT';
let food = { x: 15, y: 15 };
let score = 0;
let gameInterval;
const gridSize = 20;
const canvasSize = 400;
gameCanvas.width = canvasSize;
gameCanvas.height = canvasSize;

// Нажатие на кнопку "Включить"
startButton.addEventListener('click', () => {
    // Запускаем фоновую музыку
    mainAudio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
    });

    // Скрываем кнопку и показываем поле ввода
    startContainer.classList.add('hidden');
    codeContainer.classList.remove('hidden');

    // Запуск анимации точек
    dotsContainer.classList.add('startAnimation');
});

// Обработка ввода кода
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const code = input.value.trim().toLowerCase(); // Получаем код
        if (code === 'аня') {
            mainAudio.pause(); // Останавливаем фоновую музыку
            snakeAudio.play(); // Воспроизводим звук игры
            snakeAudio.onended = () => {
                mainAudio.play(); // Возобновляем музыку после завершения
            };
            message.textContent = "Секретное сообщение для Ани ❤️";
        } else if (code === 'love') {
            message.textContent = "Ты прекрасна, как звезда ✨";
        } else if (code === 'змейка') {
            // Останавливаем музыку и запускаем игру
            mainAudio.pause();
            snakeAudio.play();

            // Скрываем ввод и показываем игру
            codeContainer.classList.add('hidden');
            gameContainer.classList.remove('hidden');
            startGame();
        } else {
            message.textContent = "Код неверный, попробуйте ещё раз.";
        }
        input.value = ''; // Очищаем поле ввода
    }
});

// Функция создания точек
function createDots() {
    for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * 100}vw`; // Размещаем точку случайным образом по ширине
        dot.style.animationDelay = `${Math.random() * 5}s`; // Задержка анимации для каждой точки
        dot.style.animationDuration = `${3 + Math.random() * 5}s`; // Длительность анимации
        dotsContainer.appendChild(dot);
    }
}

// Запуск игры
function startGame() {
    snake = [{ x: 10, y: 10 }];
    direction = 'RIGHT';
    food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    score = 0;
    gameInterval = setInterval(updateGame, 100);
    document.addEventListener('keydown', changeDirection);
}

// Функция для обновления игры
function updateGame() {
    // Двигаем змею
    let head = { ...snake[0] };
    if (direction === 'RIGHT') head.x++;
    if (direction === 'LEFT') head.x--;
    if (direction === 'UP') head.y--;
    if (direction === 'DOWN') head.y++;

    // Проверка на столкновение с границей или с собой
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize || isCollide(head)) {
        gameOver();
        return;
    }

    // Добавляем новый элемент в голову змеи
    snake.unshift(head);

    // Если змея съела еду
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    } else {
        snake.pop(); // Убираем хвост
    }

    drawGame();
}

// Функция рисования игры
function drawGame() {
    ctx.clearRect(
