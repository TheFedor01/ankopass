// Получение элементов
const mainAudio = document.getElementById('mainAudio');
const giftAudio = document.getElementById('giftAudio');
const input = document.getElementById('codeInput');
const message = document.getElementById('message');

// Обработчик первого взаимодействия пользователя
const startAudio = () => {
    mainAudio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
    });
    // Удаляем обработчики после первого взаимодействия
    window.removeEventListener('click', startAudio);
    window.removeEventListener('keydown', startAudio);
};

// Запуск музыки при взаимодействии
window.addEventListener('click', startAudio);
window.addEventListener('keydown', startAudio);

// Функция обработки ввода кода
const handleCodeInput = () => {
    const code = input.value.trim().toLowerCase(); // Получаем код и переводим его в нижний регистр
    if (code === 'аня') {
        // Если введён код "Аня"
        mainAudio.pause(); // Останавливаем фоновую музыку
        giftAudio.play(); // Воспроизводим подарок
        giftAudio.onended = () => {
            mainAudio.play(); // Возобновляем фоновую музыку после завершения
        };
        message.textContent = "Секретное сообщение для Ани ❤️";
    } else if (code === 'love') {
        // Если введён код "Love"
        message.textContent = "Ты прекрасна, как звезда ✨";
    } else {
        // Если код неверный
        message.textContent = "Код неверный, попробуйте ещё раз.";
    }
    input.value = ''; // Очищаем поле ввода
};

// Добавляем обработчик на нажатие Enter
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleCodeInput(); // Обрабатываем ввод кода
    }
});
