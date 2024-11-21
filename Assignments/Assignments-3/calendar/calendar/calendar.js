"use strict";
const getElement = selector => document.querySelector(selector);

let currentyear = new Date();
currentyear = currentyear.getFullYear();

let currentmonth = new Date();
currentmonth = currentmonth.getMonth();

const lastDayOfMonth = new Date(currentyear, currentmonth + 1, 0);






