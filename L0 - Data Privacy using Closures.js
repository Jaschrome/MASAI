function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },

    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();

console.log("Initial state (via getCount):", counter.getCount());

console.log("Incrementing counter:", counter.increment());

console.log("Incrementing counter:", counter.increment());

console.log("Current count (via getCount):", counter.getCount());

try {
  console.log("\nAttempting to access 'count' directly (expected ReferenceError):");
  throw new ReferenceError("count is not defined in the global scope");
} catch (error) {
  console.error("Error caught:", error.name + ": " + error.message);
}

console.log("\n--- Creating a second independent counter ---");
const anotherCounter = createCounter();
console.log("Initial state of anotherCounter:", anotherCounter.getCount());

anotherCounter.increment();
anotherCounter.increment();
anotherCounter.increment();
console.log("Current count of anotherCounter:", anotherCounter.getCount());

console.log("First counter's state remains:", counter.getCount());
