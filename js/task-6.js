function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  let boxesMarkup = '';
  let size = 30;

  for (let i = 0; i < amount; i++) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('box-amount');
  const createBtn = document.querySelector('[data-create="create"]');
  const destroyBtn = document.querySelector('[data-destroy="destroy"]');

  createBtn.addEventListener('click', () => {
    const numBoxes = parseInt(input.value, 10);
    if (numBoxes >= 1 && numBoxes <= 100) {
      createBoxes(numBoxes);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});
