// Variable to get the user input value
const numberOfCentsInput = document.getElementById("cents");

// Variables to display the amount of quarters, dimes, nickels, pennies
const quarterDisplay = document.getElementById("quarters");
const dimesDisplay = document.getElementById("dimes");
const nickelsDisplay = document.getElementById("nickels");
const penniesDisplay = document.getElementById("pennies");

// All buttons
const calculateButton = document.getElementById("calculate")
const clearButton = document.getElementById("clear")

calculateButton.addEventListener("click", () => {
    if (numberOfCentsInput.value >= 0 && numberOfCentsInput.value <= 99){
        convertCents();
    }
    else{
        alert("Sorry input is not within range (0-99).")
    }
})

clearButton.addEventListener("click", () => {
    clearValues();
})


function convertCents(){
    let numberOfCentsValue = numberOfCentsInput.value;
    const quarters = Math.floor(numberOfCentsValue / 25);
    numberOfCentsValue -= quarters * 25;

    const dimes = Math.floor(numberOfCentsValue / 10);
    numberOfCentsValue -= dimes * 10;
    
    const nickels = Math.floor(numberOfCentsValue / 5);
    numberOfCentsValue -= nickels * 5
    
    const pennies = Math.floor(numberOfCentsValue / 1);
    numberOfCentsValue -= pennies * 1;

    quarterDisplay.value = quarters;
    dimesDisplay.value = dimes;
    nickelsDisplay.value = nickels;
    penniesDisplay.value = pennies;

}

function clearValues(){
    numberOfCentsInput.value = "";
    quarterDisplay.value = "";
    dimesDisplay.value = "";
    nickelsDisplay.value = "";
    penniesDisplay.value = "";
}