function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', handlerStart);

function handlerStart(evt) {
    evt.target.disabled = true;
    stopBtn.disabled = false;

    const interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    stopBtn.addEventListener('click', handlerStop);

    function handlerStop(evt) {
        evt.target.disabled = true;
        startBtn.disabled = false;
        clearInterval(interval);
    } 
};

