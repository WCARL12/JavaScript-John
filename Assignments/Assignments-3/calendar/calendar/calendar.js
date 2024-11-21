// "use strict";
// const getElement = selector => document.querySelector(selector);

const calendar = document.querySelector("#calendar")
const monthYearHeader = document.querySelector("#month_year");

let todayDate = new Date(Date.now());

let currentyear = new Date();
currentyear = currentyear.getFullYear();

let currentmonth = new Date();
currentmonth = currentmonth.getMonth();

let firstDayOfMonth = new Date(currentyear, currentmonth + 0, 1);

const lastDayOfMonth = new Date(currentyear, currentmonth + 1, 0);

// Asked ChatGPT to get the name of the month instead of having to write a function using switch case for 0-11 to get the month name. 
monthYearHeader.textContent = `${todayDate.toLocaleString('default', { month: 'long' })} ${todayDate.getFullYear()}`



let rows = Math.floor((lastDayOfMonth.getDate() / 7) + 1);


let daysCounter = 0;

for (let i = 0; i < rows; i++){
    let tableRow = document.createElement("tr");

    for (let j = 0; j < 7; j++){
        let tableCell = document.createElement("td");
        let currentDay = firstDayOfMonth.getDay();
        
        if (currentDay === j && daysCounter !== lastDayOfMonth.getDate()){
            daysCounter++;
            tableCell.textContent = daysCounter;
            firstDayOfMonth = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1));

            if (todayDate.getDate() === daysCounter){
                tableCell.classList.add("today");
            }
        }

        else{
            tableCell.textContent = "";
        }

        tableRow.appendChild(tableCell);
    }
    calendar.appendChild(tableRow);

}






