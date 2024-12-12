"use strict"

const image_elements = ["images/bison.jpg","images/deer.jpg","images/hero.jpg","images/release.jpg"]
const imagesDisplay = document.querySelectorAll(".row")[1].children;


// code the get element function

document.addEventListener("DOMContentLoaded", () => {
  
    // get the elements from the DOM

    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let imgToShift = image_elements.shift();
        image_elements.push(imgToShift)
        // console.log(image_elements);
        



        // display the first three images
        displayImages()
        
    });
    
    // click event listener for the Right button
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the elements in the array
        let imgToShift = image_elements.pop();
        image_elements.unshift(imgToShift);
        
        
        // display the first three images
        displayImages()

    });
})


function displayImages(){
    for (let i = 0; i < imagesDisplay.length; i++){
        imagesDisplay[i].src = image_elements[i];
        
    }
}