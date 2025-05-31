var age = 30;

function displayAge() {
    console.log("Age inside displayAge (global context):", age);
}

function changeAge() {
    age = 35;
    console.log("Age inside changeAge (after update):", age);
}

console.log("Initial global age:", age);

displayAge();

changeAge();

displayAge();

console.log("Final global age:", age);
