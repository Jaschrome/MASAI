// Imperative approach: Manual DOM manipulation

function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  clockElement.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock(); // Call once immediately
