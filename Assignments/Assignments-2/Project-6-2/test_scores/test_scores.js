let highScoreName = null;
let lowScoreName = null;

let highScore = null;
let lowScore = null;
let averageScore = null;


let students = [];
let studentScore = []

const nameInput = document.querySelector("#name")
const scoreInput = document.querySelector("#score")

const addButton = document.querySelector("#add")
const clearButton = document.querySelector("#clear")

const nameErrorMessage = document.querySelector(".name-container > span");
const gradeErrorMessage = document.querySelector(".score-container > span");

const resultDiv = document.querySelector("#results")
const scoreDiv = document.querySelector("#scores")


addButton.addEventListener("click", () => {
    if ((!nameInput.value)){
        displayError(nameErrorMessage, "Please enter a name")
        
    }
    if(!scoreInput.value || (parseInt(scoreInput.value) <= 0 || parseInt(scoreInput.value) >= 100)){
        displayError(gradeErrorMessage, "Score must be between 0 and 100")        
        
    }
    else{
        addStudentsAndScore()
        determineScores()
        displayResults()
        displayScores()
        displayError(nameErrorMessage, "")
        displayError(gradeErrorMessage, "")        
    }
})

clearButton.addEventListener("click", () =>{
    clearDisplay();
})


function addStudentsAndScore(){
    students.push(nameInput.value)
    studentScore.push(parseInt(scoreInput.value))
}

function getAverage(){
    let averageGrade = 0;
    for (let i = 0; i < studentScore.length; i++){
        averageGrade += studentScore[i]    
    }
    return (averageGrade / studentScore.length).toFixed(0)
}

// Determining high, low, average score
function determineScores(){
    score = parseInt(scoreInput.value)
    if (score < lowScore || lowScore === null){
        lowScore = score;
        lowScoreName = students[students.length - 1]
    }
    if (score > highScore || highScore === null){
        highScore = score;
        highScoreName = students[students.length - 1]
    }
    averageScore = getAverage()
}

// Display the result section
function displayResults(){
    let headerResults = document.createElement("h2");
    let lowScorePara = document.createElement("p");    
    let highScorePara = document.createElement("p");    
    let averageScorePara = document.createElement("p");

    headerResults.textContent = "Results";
    lowScorePara.textContent = `Low score = ${lowScoreName} with a score of ${lowScore}`;
    highScorePara.textContent = `High score = ${highScoreName} with a score of ${highScore}`;
    averageScorePara.textContent = `Average score = ${averageScore}`

    resultDiv.replaceChildren(headerResults, lowScorePara, highScorePara, averageScorePara)

}

function displayScores(){
    scoreDiv.replaceChildren();
    const scoreHeader = document.createElement("h2");
    scoreHeader.textContent = "Scores";
    scoreDiv.appendChild(scoreHeader);
    
    for (let i = 0; i < students.length; i++){
        const scorePara = document.createElement("p");
        const name = students[i];
        const score = studentScore[i]; 
        scorePara.innerHTML = `${name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${score}`;
        scoreDiv.appendChild(scorePara);
    }

}

function displayError(element, error){
    element.textContent = error
}

function clearDisplay(){
    nameInput.value = "";
    scoreInput.value = "";
    resultDiv.replaceChildren();
    scoreDiv.replaceChildren();
    students = [];
    studentScore = [];
    highScoreName = null;
    lowScoreName = null;
    highScore = null;
    lowScore = null;
    averageScore = null;
    displayError(nameErrorMessage, "");
    displayError(gradeErrorMessage, "");
}