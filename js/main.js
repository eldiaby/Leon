"use strict";

const navIcon = document.querySelector(".header-nav-icon");
const navLinks = document.querySelector(".header-nav-links");
navIcon.addEventListener("click", () => {
  navLinks.classList.toggle("block");
});
