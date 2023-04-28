window.onload = init;

function init() {
  console.log("init working");
  const f2cBtnEl = document.getElementById("convertF");
  f2cBtnEl.onclick = onf2cBtnClicked;
  const resetFEl = document.getElementById("resetF");
  resetFEl.onclick = oncresetFClicked;
}

function onf2cBtnClicked() {
  console.log("f2c working");
  const tempF = Number(document.getElementById("fahrenheitTemp").value);
  const temp2C = ((tempF - 32) * 5) / 9;
  document.getElementById("f2cAns").value = temp2C;
}

function oncresetFClicked() {
  document.getElementById("fahrenheitTemp").value = 0;
  document.getElementById("f2cAns").value = "";
}
