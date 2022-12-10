const Button = document.querySelector(".header__button");
const nav = document.querySelector(".nav");

Button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});
