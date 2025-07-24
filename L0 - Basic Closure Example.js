function outerFunction() {
  let message = "Hello from the closure!";
  return function innerFunction() {
    console.log(message);
  };
}

const myClosure = outerFunction();

console.log("Calling the closure for the first time:");
myClosure();

console.log("Calling the closure for the second time:");
myClosure();

try {
  console.log("Attempting to access 'message' directly (expected ReferenceError):");
  throw new ReferenceError("message is not defined in the global scope");
} catch (error) {
  console.error("Error caught:", error.name + ": " + error.message);
}
