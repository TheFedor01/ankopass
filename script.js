function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const secrets = {
        "secret1": "Твой первый секрет 🌟",
        "12345": "Простой пароль, но ты умная!",
        "love": "Я тебя люблю ❤️"
    };

    if (secrets[password]) {
        message.textContent = secrets[password];
        message.style.color = "green";
    } else {
        message.textContent = "Неверный пароль 😕";
        message.style.color = "red";
    }
}
