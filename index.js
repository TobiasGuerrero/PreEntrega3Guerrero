const Button = document.querySelector(".header__button");
const nav = document.querySelector(".nav");
const button__x = document.querySelector(".button__x");
const button__menu = document.querySelector(".button__menu");

Button.addEventListener("click", () => {
  nav.classList.toggle("activo");
  button__x.classList.toggle("activo");
  button__menu.classList.toggle("activo");
});
