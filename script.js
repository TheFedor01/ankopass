const mainAudio = document.getElementById('mainAudio');
const giftAudio = document.getElementById('giftAudio');
const input = document.getElementById('codeInput');
const message = document.getElementById('message');

// Включение основной музыки после первого взаимодействия
const enableAudio = () => {
    mainAudio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
    });
    window.removeEventListener('click', enableAudio);
};
window.addEventListener('click', enableAudio);

// Обработка ввода кода
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const code = input.value.trim().toLowerCase();
        if (code === 'аня') {
            mainAudio.pause();
            giftAudio.play();
            giftAudio.onended = () => {
                mainAudio.play();
            };
            message.textContent = "Секретное сообщение для Ани ❤️";
        } else if (code === 'love') {
            message.textContent = "Ты прекрасна, как звезда ✨";
        } else {
            message.textContent = "Код неверный, попробуйте ещё раз.";
        }
        input.value = '';
    }
});
