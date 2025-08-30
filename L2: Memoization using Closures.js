function memoize(fn, maxSize = 5) {
  const cache = new Map()
  return function(...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    if (cache.size > maxSize) {
      const firstKey = cache.keys().next().value
      cache.delete(firstKey)
    }
    return result
  }
}

function slowSquare(n) {
  for (let i = 0; i < 1e6; i++) {}
  return n * n
}

const memoizedSquare = memoize(slowSquare)

console.log(memoizedSquare(4))
console.log(memoizedSquare(4))
console.log(memoizedSquare(5))
console.log(memoizedSquare(6))
console.log(memoizedSquare(7))
console.log(memoizedSquare(8))
console.log(memoizedSquare(4))
