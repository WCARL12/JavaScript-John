"use strict";

const h2s = document.querySelectorAll("#faqs h2");

// the event handler for the click event of each <h2> element
const toggleVisibility = evt => {
    const h2 = evt.currentTarget;        // get the <h2> element
    const div = h2.nextElementSibling;   // get the <div> element

    for (const header of h2s){
        if (header != h2){
            header.classList.remove("minus")
            header.nextElementSibling.classList.remove("open")
        }
    }
    
    
    h2.classList.toggle("minus");
    div.classList.toggle("open");
    
    evt.preventDefault();                // cancel default action of child <a> element
};
    
document.addEventListener("DOMContentLoaded", () => {
    // get the <h2> elements

    // attach event handler for each <h2> element
    for (let h2 of h2s) {
        h2.addEventListener("click", toggleVisibility);
    }

    // set focus on first <a> element
    h2s[0].firstChild.focus();
});    