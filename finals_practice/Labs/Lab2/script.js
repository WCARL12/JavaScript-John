let displayResult = document.createElement("p");
let header = document.querySelector(".header");

let convertToCelsius = (fahreinheit) => {
    const celsius =  (fahreinheit - 32) * 5/9; 

    return celsius;
}

const fahreinheit = prompt("Enter Fahrenheiit temperature")
const celsius = convertToCelsius(fahreinheit);


displayResult.innerText = `${fahreinheit}F = ${celsius}C`
header.appendChild(displayResult);


