
let farheinheit = parseInt(prompt("Enter Farheinheit Temperature"))

let celsius = (farheinheit - 32) * 5 / 9;

let conversionPara = document.querySelector('.myClass')

conversionPara.textContent = `${farheinheit} F = ${celsius} C`;
