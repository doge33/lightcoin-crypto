class Account {

  constructor(username) {

    this.username = username;
    this.transaction = [];
  }

  get balance() {
    let balance = 0;
    this.transaction.forEach((trans) =>
    balance += trans.value);
    return balance;
  }

  addTransaction(transaction) {

    this.transaction.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {

    if (this.isAllowed() === true) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    }
      return false;
  }
}


class Withdrawal extends Transaction {

  get value() {
    return (0 - this.amount);
  }

  isAllowed() {
    return (this.amount <= this.account.balance);
  }
}



class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected


const myAccount = new Account("snow-patrol");
console.log("Starting Balance: ", myAccount.balance)
console.log("--------------------------------")


const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);
console.log("--------------------------------")

const t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);
console.log("--------------------------------")

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log("--------------------------------")

console.log('Balance:', myAccount.balance);
console.log("Transaction history: ", myAccount.transaction)







/* ORIGINAL ASSIGNMENT STARTER CODE


let balance = 500.00;

class Withdrawal {

  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);
*/
