// "use strict";

// getElement()
const getElement = (selector) => {
  return document.querySelector(selector);
};

// getElements()
function getElements(selector) {
  return document.querySelectorAll(selector);
}

function swapFirstTwo() {
  // Getting all the movie titles with Array
  let movieArray = getElements("#movie");

  // Getting the elements inside of the parent div to get the child with the id of "movie-title"
  const movieTitle1 = movieArray[0].querySelector("#movie-title").textContent;
  const movieTitle2 = movieArray[1].querySelector("#movie-title").textContent;

  // Switching of Movie titles for #1 and #2;
  
  movieArray[0].querySelector("#movie-title").textContent = movieTitle2;
  movieArray[1].querySelector("#movie-title").textContent = movieTitle1;
  
}

function swapLastTwo() {
  // Getting all the movie titles with Array
  let movieArray = getElements("#movie");

  // Getting the elements inside of the parent div to get the child with the id of "movie-title"
  const movieTitle2 = movieArray[1].querySelector("#movie-title").textContent;
  const movieTitle3 = movieArray[2].querySelector("#movie-title").textContent;

  // Switching of Movie titles for #2 and #3;
  
  movieArray[1].querySelector("#movie-title").textContent = movieTitle3;
  movieArray[2].querySelector("#movie-title").textContent = movieTitle2;
  
}

const topButton = getElement("#top_btn");
const upButton = getElement("#up_btn");
const downButton = getElement("#down_btn")
const bottomButton = getElement("#bottom_btn")

topButton.addEventListener("click", () => {swapFirstTwo()});
upButton.addEventListener("click",() => {swapFirstTwo()});

downButton.addEventListener("click",() => {swapLastTwo()});
bottomButton.addEventListener("click",() => {swapLastTwo()});

document.addEventListener("DOMContentLoaded", () => {});

// Learned
// .value is used for specifically for forms
// textContent are used for tags like p, h1, etc.
// using a 1 line arrow function without {} automatically returns the value
// using multiple lines of arrow function with {} have to specify the return keyword. 
// querySelectorAll() returns a nodeList;
// It is better to define functions at the top; 