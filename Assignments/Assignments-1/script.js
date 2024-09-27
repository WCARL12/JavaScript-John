
// Asking the user to input a farheinheit number to convert

let farheinheit = (parseFloat(prompt("Enter Farheinheit Temperature:"))).toFixed(1)

while (farheinheit != 999){
    if (farheinheit < -100 || farheinheit > 212){
        alert(`You entered ${farheinheit}\nEntry must range from -100 to +212.`)
    }
    else{
        let celsius = ((farheinheit - 32) * 5 / 9).toFixed(1);
        document.writeln(`<p>${farheinheit} F = ${celsius} C</p>`)
    }
    farheinheit = (parseFloat(prompt("Enter Farheinheit Temperature:"))).toFixed(1)
}