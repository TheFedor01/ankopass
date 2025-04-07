// Sprite Animation
const sprite = document.getElementById('fedro-sprite');
const sprites = ['fedrosprite1.png', 'fedrosprite2.png', 'fedrosprite3.png', 'fedrosprite4.png'];
let spriteIndex = 0;

function animateSprite() {
    sprite.src = sprites[spriteIndex];
    spriteIndex = (spriteIndex + 1) % sprites.length;
}

setInterval(animateSprite, 500); // Change sprite every 500ms

// Typing Effect
const textElement = document.getElementById('text');
const typingSound = document.getElementById('typing-sound');
const message = "Привет, Анечка!!!"; // Customize this message

let charIndex = 0;

function typeText() {
    if (charIndex < message.length) {
        textElement.textContent += message[charIndex];
        typingSound.currentTime = 0; // Reset sound to start
        typingSound.play();
        charIndex++;
        setTimeout(typeText, 100); // Adjust typing speed (100ms per character)
    }
}

// Start typing when the page loads
window.onload = function() {
    typeText();
};
