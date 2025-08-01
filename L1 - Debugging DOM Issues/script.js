const para = document.querySelector('#message');
const textButton = document.getElementById('textButton');

textButton.addEventListener('click', () => {
  para.textContent = 'New Message';
});

const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
});
