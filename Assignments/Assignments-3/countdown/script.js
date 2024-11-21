const dueDate = new Date("11/25/2024");
let todayDate = new Date(Date.now());


let msUntilDue = dueDate.getTime() - todayDate.getTime();

let days = Math.floor(((msUntilDue / 1000) / 86400));
let hours = Math.floor((((msUntilDue / 1000) / 3600) - 24 * days))


let minutes = Math.floor(((msUntilDue / 1000) / 60) - (hours * 60) - (days * 24 * 60));
let seconds = Math.floor(60 - todayDate.getSeconds())


console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);








