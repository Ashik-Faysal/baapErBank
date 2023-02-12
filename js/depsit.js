// 1. Step - 1: add event listeners to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // 2. step: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-7 : clear the deposit field
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("please enter a valid number");
    return;
  }
  // step-3: get the current deposit amount
  // for non-input (element other than , textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const PreviousDepositTotalString = depositTotalElement.innerText;
  const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

  //step-4: add numbers to set the total deposit amount
  const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // step-5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6:  calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
});
