"use strict"

const image_elements = ["images/bison.jpg","images/deer.jpg","images/hero.jpg","images/release.jpg"]

// code the get element function
const getElement = (selector) => {
    return document.querySelector(selector)
}

document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    let carouselImageLeft = getElement(".img-1"); 
    let carouselImageMiddle = getElement(".img-2"); 
    let carouselImageRight = getElement(".img-3"); 
    
    
    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {

        // shift the items in the array to the left
        const imageShifted = image_elements.shift();
        image_elements.push(imageShifted);        
        
        // display the first three images
        carouselImageLeft.src = image_elements[0];
        carouselImageMiddle.src = image_elements[1];
        carouselImageRight.src = image_elements[2];

    });

    // click event listener for the Right button
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        const imageShifted = image_elements.pop();
        image_elements.unshift(imageShifted);    
        
        // display the first three images
        carouselImageLeft.src = image_elements[0];
        carouselImageMiddle.src = image_elements[1];
        carouselImageRight.src = image_elements[2];

    });
})