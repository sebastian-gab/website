document.getElementById("menu-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the default anchor behavior
  document.getElementById("header__button").classList.toggle("hamburger--open");
  document.querySelector(".menu-holder").classList.toggle("show");
});