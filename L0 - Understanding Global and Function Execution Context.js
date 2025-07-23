let age = 30;

function displayAge() {
  console.log("Current age (from displayAge):", age);
}

function changeAge() {
  console.log("Age before change (from changeAge):", age);
  age = 35;
  console.log("Age after change (from changeAge):", age);
}

console.log("--- Initial State ---");
displayAge();

console.log("\n--- Changing Age ---");
changeAge();

console.log("\n--- After Change ---");
displayAge();
