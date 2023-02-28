function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

createBtn.addEventListener('click', () => {
  let amount = input.value;
  if (amount > 100) {
    amount = 100;
    input.value = 100;
    alert('Input value cannot be greather than 100');
  } else if (amount < 0) {
    amount = 0;
    input.value = 0;
    alert('Input value cannot be lesser than 0');
    return;
  };
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});