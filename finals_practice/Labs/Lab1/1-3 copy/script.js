const headerDieRoller = document.querySelector(".header-die");

const getRandomNumber = () =>{
    const randomNumber = Math.floor(Math.random() * 8) + 1; 
    return randomNumber
}

const randomNumber = getRandomNumber();

headerDieRoller.innerText = "Die Roller: " + randomNumber;
