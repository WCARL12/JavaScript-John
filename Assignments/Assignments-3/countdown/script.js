const eventDate = new Date("4/15/2024");

let dueDate = new Date();

dueDate.setDate(Date.now() - eventDate)

console.log(dueDate);

