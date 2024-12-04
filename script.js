// Получение элементов
const startButton = document.getElementById('startButton');
const startContainer = document.getElementById('startContainer');
const codeContainer = document.getElementById('codeContainer');
const mainAudio = document.getElementById('mainAudio');
const giftAudio = document.getElementById('giftAudio');
const input = document.getElementById('codeInput');
const message = document.getElementById('message');
const dotsContainer = document.getElementById('dotsContainer');

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
            giftAudio.play(); // Воспроизводим подарок
            giftAudio.onended = () => {
                mainAudio.play(); // Возобновляем музыку после завершения
            };
            message.textContent = "Секретное сообщение для Ани ❤️";
        } else if (code === 'love') {
            message.textContent = "Ты прекрасна, как звезда ✨";
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

// Создаем точки, но не запускаем анимацию до нажатия кнопки
createDots();
