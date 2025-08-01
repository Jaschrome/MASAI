const ul = document.querySelector('#item-list');
const button = document.querySelector('#add-button');

button.addEventListener('click', function () {
  const newItem = document.createElement('li');
  const count = ul.children.length + 1;
  newItem.textContent = `Item ${count}`;

  if (count % 2 === 1) {
    newItem.classList.add('bold-blue');
  } else {
    newItem.classList.add('italic-red');
  }

  ul.appendChild(newItem);
});
