const input = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function () {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.style.marginLeft = '10px';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '5px';

  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  input.value = '';
});
