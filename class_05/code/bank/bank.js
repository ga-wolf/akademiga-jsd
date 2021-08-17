function createBank() {
  let balance = 0;

  function deposit(num) {
    balance += num;
    showBalance();
  }

  function withdraw(num) {
    balance -= num;
    showBalance();
  }

  function showBalance() {
    let msg = `Your current balance is: ${balance}`;
    let heading = document.querySelector(".balance");
    heading.innerHTML = msg;
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    showBalance: showBalance,
  };
}

let bank = createBank();

let depositButton = document.querySelector(".deposit button");

function onDeposit() {
  let input = document.querySelector(".deposit input");
  let currentValueAsString = input.value;
  let toBeDeposited = parseFloat(currentValueAsString);
  bank.deposit(toBeDeposited);
  input.value = "";
}

depositButton.addEventListener("click", onDeposit);

let withdrawButton = document.querySelector(".withdraw button");

function onWithdrawal() {
  let input = document.querySelector(".withdraw input");
  let value = input.value;
  let valueAsNum = parseFloat(value);
  bank.withdraw(valueAsNum);
  input.value = "";
}

withdrawButton.addEventListener("click", onWithdrawal);
