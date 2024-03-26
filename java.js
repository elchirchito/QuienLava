const names = ["Benja", "Male", "Papá", "Mamá", "Mica"];

const getRandomName = () => {
  return names[Math.floor(Math.random() * names.length)];
}

let animationInterval;
let counter = 0;

const startAnimation = () => {
  animationInterval = setInterval(() => {
    document.getElementById('random-text').textContent = getRandomName();
    counter++;
    if (counter >= 20) {
      clearInterval(animationInterval);
    }
  }, 100);
}

document.getElementById('start-button').addEventListener('click', () => {
  counter = 0;
  startAnimation();
});