"use strict";

const getElement = selector => document.querySelector(selector); 

const displayInvoice = () => {
    const companyName = getElement("#company").value;
    const amountDue = parseFloat(getElement("#amount_due").value);
    const invoiceDate = new Date(getElement("#invoice_date").value);
    const dueDate = new Date(invoiceDate)
    const todayDate = new Date();
    
    
    // console.log(invoiceDate.toDateString())
    
    
    // display user entries
    let output = "Invoice Information\n";
    output += "Company name: " + companyName + "\n";
    output += "Amount due: $" + amountDue.toFixed(2) + "\n";
    output += "Invoice Date: " + invoiceDate.toDateString() + "\n";
    
    // calculate due date and display
    dueDate.setDate(dueDate.getDate() + 90);
    output += "Due Date: " + dueDate.toDateString() + "\n";

    output += "Today Date: " + todayDate.toDateString() + "\n";
    

    // calculate days until due and display
    // console.log(dueDate - todayDate.;

    const msUntilDue = dueDate.getTime() - todayDate.getTime();
    const msPerDay = 24 * 60 * 60 * 1000;
    // const msUntilDue = Math.round((dueDate.getTime() - todayDate.getTime()) / msPerDay);
    const daysToDue = Math.ceil(msUntilDue / msPerDay);    
    if (daysToDue == 0) {
        output += "Due TODAY\n";        
    } else if (daysToDue < 0) {
        output += Math.abs(daysToDue) + " days o\n";
    } else {
        output += "Due in " + daysToDue + " days\n";
    }
    
    
    alert(output);
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#display_invoice").addEventListener("click", displayInvoice);
    getElement("#company").focus();
});