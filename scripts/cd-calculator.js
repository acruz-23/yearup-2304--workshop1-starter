console.log("hello world!");
window.onload = init;

function init() {
  console.log("init started");
  const mortCalcBtnEl = document.getElementById("mortCalcBtn");
  mortCalcBtnEl.onclick = onMortCalcBtnClicked;

  console.log("init finished");
}

function onMortCalcBtnClicked() {
  console.log("MortCalc Started");
  const loanAmount = Number(document.getElementById("loanAmount").value);
  const interestRate =
    Number(document.getElementById("interestRate").value) / 100;
  const monthlyInterestRate = interestRate / 12;
  const loanTerm = Number(document.getElementById("loanTerm").value);
  const monthlyLoanTerm = loanTerm * 12;
  const monthlyPayment =
    loanAmount *
    (monthlyInterestRate / (1 - (1 + monthlyInterestRate) ** -monthlyLoanTerm));
  const loanTotal = monthlyPayment * monthlyLoanTerm;
  document.getElementById("monthlyPayment").innerHTML =
    monthlyPayment.toFixed(2);
  document.getElementById("totalCost").innerHTML = loanTotal.toFixed(2);
  console.log("Mort Calc finsihed");
  //   console.log("monthly interest rate: " + monthlyInterestRate);
  // console.log("monthly Loan Term: " + monthlyLoanTerm);
  //
}
