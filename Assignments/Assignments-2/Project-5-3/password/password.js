const numberOfCharacters = document.getElementById("num");
const passwordDisplay = document.getElementById("password");
const generateButton = document.getElementById("generate");
const clearButton = document.getElementById("clear");

const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number;
const symbols = "!@#$%^&*()_+=-[]{}~`;:,<.>?/";

generateButton.addEventListener("click", () => {
    if (numberOfCharacters.value > 0){
        passwordDisplay.value = getPassword();
    }
    else{
        alert("Number of characters must be greater than 0")
    }
})

clearButton.addEventListener("click", () => {
    clearValues();
})

function getPassword(){
    let newPassword = "";

    for (let i = 0; i < numberOfCharacters.value; i++){
        const num = Math.floor(Math.random() * 4) + 1 ;    
        switch (num){
            case 1:
                newPassword += lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)]
                break;
                
            case 2:
                newPassword += upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)]
                break;

            case 3:
                newPassword += (Math.floor(Math.random() * 10) + 1).toString();
                break;

            case 4:
                newPassword += symbols[Math.floor(Math.random() * symbols.length)]
        }
        
    }
    
    return newPassword;
    
    
    
}

function clearValues(){
    numberOfCharacters.value = "";
    passwordDisplay.value = "";
}


// console.log();