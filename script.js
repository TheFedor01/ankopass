const text = "Привет, моя дорогая! ✨\nЯ сделал этот сайт специально для тебя. 💖\nТы чудо в моей жизни!";
const typedText = document.getElementById('typed-text');
const voice = document.getElementById('voice');
const bgm = document.getElementById('bgm');

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('main').style.display = 'block';
  bgm.play();
  typeText(text, 50);
});

function typeText(str, speed) {
  let i = 0;
  function type() {
    if (i < str.length) {
      typedText.textContent += str[i];
      if (str[i] !== ' ' && str[i] !== '\n') {
        voice.currentTime = 0;
        voice.play();
      }
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
