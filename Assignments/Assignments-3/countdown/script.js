const eventDate = new Date("11/25/2024");

let todayDate = new Date(Date.now());


// dueDate.setDate(dueDate.getDate() - eventDate.getDate())
// console.log(todayDate.getDate());
// dueDate.getMilliseconds
// eventDate.setDate(eventDate.getDate() + 30)
// console.log(eventDate);
// dueDate = dueDate.getTime();
let msUntilDue = eventDate.getTime() - todayDate.getTime();
let days = (msUntilDue / 1000) / 86400;

msUntilDue = (eventDate.getTime() - todayDate.getTime());
let hours =  (msUntilDue / 1000) / 3600;
// let hours =  (msUntilDue / 1000) / 3600;

console.log(days);
console.log(hours);







