const userProfile = {
  name: "Alice",
  age: 28,

  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (typeof newAge !== 'number' || newAge <= 0 || isNaN(newAge)) {
      console.log("Error: Invalid age. Age must be a positive number.");
      return;
    }

    this.age = newAge;
    console.log(`Age updated successfully for ${this.name}.`);
    console.log(this.details());
  }
};

console.log("--- Initial State ---");
console.log(userProfile.details());

console.log("\n--- Updating Age ---");
userProfile.updateAge(30);

console.log("\n--- Attempting Invalid Age Updates ---");
userProfile.updateAge(-5);
userProfile.updateAge(0);
userProfile.updateAge("abc");
userProfile.updateAge(null);
userProfile.updateAge(undefined);

console.log("\n--- Final State ---");
console.log(userProfile.details());

/*
Fixes Made-
  - Corrected string interpolation syntax to use ES6 template literals (backticks `` ` ``).
  - Used concise method syntax `details()`.
  - Improved age validation to check for `newAge` being a valid positive number (`typeof newAge !== 'number' || newAge <= 0 || isNaN(newAge)`).
  - Corrected `console.log(this.details)` to `console.log(this.details())` to call the method and log its returned string, not the function itself.
*/
