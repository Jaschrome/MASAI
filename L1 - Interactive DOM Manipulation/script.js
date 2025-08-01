// selecting all the elements i need
const colorInput = document.getElementById('color-input');   // for background color input
const textInput = document.getElementById('text-input');     // for new text input
const bgButton = document.getElementById('bg-btn');          // change background button
const textButton = document.getElementById('text-btn');      // update text button
const targetBox = document.getElementById('target-box');     // the div we are going to update

// function to check if a color is valid (I found this way works)
function isValidColor(color) {
  const test = document.createElement('div');
  test.style.color = color;
  return test.style.color !== '';
}

// when background button is clicked
bgButton.addEventListener('click', function () {
  const color = colorInput.value.trim();  // getting user color input

  if (isValidColor(color)) {
    // if color is valid, change background
    targetBox.style.backgroundColor = color;
  } else {
    // if not valid, alert the user
    alert('Invalid color name!');
  }
});

// when text update button is clicked
textButton.addEventListener('click', function () {
  const newText = textInput.value.trim();  // getting user text input

  if (newText !== '') {
    // if there's some text, update the div
    targetBox.textContent = newText;
  } else {
    // else show warning
    alert('Please enter some text!');
  }
});
