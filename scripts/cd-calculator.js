console.log("hello world!");
window.onload = init;

function init() {
  console.log("init started");
  const cdCalcBtnEl = document.getElementById("cdCalcBtn");
  cdCalcBtnEl.onclick = oncdCalcBtnClicked;

  console.log("init finished");
}

function oncdCalcBtnClicked() {
  console.log("cdCalc Started");
  const depositAmount = Number(document.getElementById("cdDeposit").value);
  const cdRate = Number(document.getElementById("cdRate").value) / 100;
  const cdTerm = Number(document.getElementById("cdTerm").value);
  const maturityValue = depositAmount * (1 + cdRate / 365) ** (365 * cdTerm);
  const interestAccrued = maturityValue - depositAmount;
  document.getElementById("maturityValue").innerHTML =
    "$" + maturityValue.toFixed(2);
  document.getElementById("interestAccrued").innerHTML =
    "$" + interestAccrued.toFixed(2);
  console.log("cd Calc finsihed");
  // console.log("monthly interest rate: " + monthlyInterestRate);
  // console.log("monthly Loan Term: " + monthlyLoanTerm);
  //
}
