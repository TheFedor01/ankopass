// Получение элементов
const startButton = document.getElementById('startButton');
const startContainer = document.getElementById('startContainer');
const codeContainer = document.getElementById('codeContainer');
const mainAudio = document.getElementById('mainAudio');
const giftAudio = document.getElementById('giftAudio');
const input = document.getElementById('codeInput');
const message = document.getElementById('message');

// Нажатие на кнопку "Включить"
startButton.addEventListener('click', () => {
    mainAudio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
    });
    startContainer.classList.add('hidden'); // Скрываем кнопку
    codeContainer.classList.remove('hidden'); // Показываем поле ввода
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

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleCodeInput(); // Обрабатываем ввод кода
    }
});
