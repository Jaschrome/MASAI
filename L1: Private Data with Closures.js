function bankAccount(initialBalance = 0) {
  let balance = initialBalance
  function deposit(amount) {
    balance += amount
    return balance
  }
  function withdraw(amount) {
    if (amount <= balance) {
      balance -= amount
    }
    return balance
  }
  function getBalance() {
    return balance
  }
  function reset() {
    balance = initialBalance
    return balance
  }
  return { deposit, withdraw, getBalance, reset }
}

const account = bankAccount(200)
console.log(account.deposit(100))
console.log(account.withdraw(50))
console.log(account.getBalance())
console.log(account.reset())
console.log(account.getBalance())
