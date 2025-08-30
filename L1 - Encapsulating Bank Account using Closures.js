function createBankAccount(initialBalance) {
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

  return { deposit, withdraw, getBalance }
}

const account = createBankAccount(100)
console.log(account.deposit(50))
console.log(account.withdraw(30))
console.log(account.getBalance())
