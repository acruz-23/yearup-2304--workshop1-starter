console.log("hello world!");
window.onload = init;

function init() {
  console.log("init started");
  const pvoCalcBtnEl = document.getElementById("pvoCalcBtn");
  pvoCalcBtnEl.onclick = onpvoCalcBtnClicked;

  console.log("init finished");
}

function onpvoCalcBtnClicked() {
  console.log("annuityCalc Started");
  const monthlyPayout = Number(document.getElementById("monthlyPayout").value);
  const annuityRate =
    Number(document.getElementById("annuityRate").value) / 100;
  const monthlyAnnuityRate = annuityRate / 12;
  const annuityTerm = Number(document.getElementById("annuityTerm").value);
  const annuityPayments = annuityTerm * 12;
  const pvo =
    monthlyPayout *
    ((1 - (1 + monthlyAnnuityRate) ** -annuityPayments) / monthlyAnnuityRate);
  document.getElementById("pvo").innerHTML = "$" + pvo.toFixed(2);

  console.log("Annuity Calc finsihed");
  // console.log("monthly interest rate: " + monthlyInterestRate);
  // console.log("monthly Loan Term: " + monthlyLoanTerm);
  //
}
