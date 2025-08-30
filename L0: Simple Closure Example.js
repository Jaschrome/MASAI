function createCounter() {
  let count = 0
  function counter() {
    count++
    return count
  }
  counter.reset = function() {
    count = 0
    return count
  }
  return counter
}

const myCounter = createCounter()
console.log(myCounter())
console.log(myCounter())
console.log(myCounter.reset())
console.log(myCounter())
