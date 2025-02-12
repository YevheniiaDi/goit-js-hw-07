document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', () => {
    const trimmedInput = input.value.trim();
    if (trimmedInput) {
      output.textContent = trimmedInput;
    } else {
      output.textContent = 'Анонім';
    }
  });
});
