class BankAccount {
  constructor(accountBalance, pin){
    this.accountBalance = accountBalance;
    this.pin = pin;
  }

  deposit(amount, pin) {
    if(pin == this.pin) {
      this.accountBalance += amount;
      return `Account balance updated. \nNew balance: $${this.accountBalance}`;
    }
    return "Wrong pin";
  }

  withdraw(amount, pin) {
    if(pin == this.pin) {
      if(this.accountBalance > amount) {
        this.accountBalance -= amount;
        return `Account balance updated. \nNew balance: $${this.accountBalance}`;
      }
      return "Insufficient balance";
    }
    return "Wrong pin";
  }

  get_balance(pin) {
    if(pin == this.pin){
      return `Current balance: $${this.accountBalance}`;
    }
    return "Wrong pin";
  }

  change_pin(oldpin, newpin) {
    if(oldpin == this.pin){
      this.pin = newpin;
      return `Pin updated`;
    }
    return "Wrong pin";
  }
}

class SavingAccount extends BankAccount {
  constructor(accountBalance, pin, interestRate = 5) {
    super(accountBalance, pin);
    this.interestRate = interestRate;
  }

  calculate_interest_earned() {
    let output = "";
    output += `Current balance before interest: $${this.accountBalance} \n`;
    let interestAmount = this.accountBalance * (this.interestRate / 100);
    output += `Interest amount: $${interestAmount} \n`
    this.accountBalance += interestAmount;
    output += `Current balance after interest: $${this.accountBalance}`;
    return output;
  }
}

let account = new BankAccount(6000, 012345);

console.log(account.deposit(1000, 012345));
console.log();
console.log(account.withdraw(9000, 012345));
console.log();
console.log(account.withdraw(4000, 012345));
console.log();
console.log(account.get_balance(000000));
console.log();
console.log(account.get_balance(012345));
console.log();
console.log(account.change_pin(012345, 000000));
console.log();

let account2 = new SavingAccount(6000, 012345, 5);
console.log(account2.calculate_interest_earned());
console.log();
