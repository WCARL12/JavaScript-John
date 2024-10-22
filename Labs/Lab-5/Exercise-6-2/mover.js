// "use strict";

// const topButton = getElement("#top_btn");

// getElement()
const getElement = (selector) => {
  document.querySelector(selector);
};

// getElements()
function getElements(selector) {
  document.querySelectorAll(selector);
}

function swapFirstTwo() {
  let movieArray = getElements("#movie");
  console.log(movieArray);
}

// moveDown()

// moveUp()

const topButton = getElement("#top_btn");
const upButton = getElement("#up_btn");

topButton.addEventListener("click", swapFirstTwo());
upButton.addEventListener("click", swapFirstTwo());
document.addEventListener("DOMContentLoaded", () => {});
