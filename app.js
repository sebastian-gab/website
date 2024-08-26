const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");
const certs = document.getElementById("certs");



document.getElementById("menu-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the default anchor behavior
  document.getElementById("header__button").classList.toggle("hamburger--open");
  document.querySelector(".menu-holder").classList.toggle("show");
});

document.querySelector(".about-item__about").addEventListener("click", function(event) {
  event.preventDefault();
  aboutMe.style.display = 'block';
  skills.style.display = 'none';
  certs.style.display = 'none';

});

document.querySelector(".about-item__skills").addEventListener("click", function(event) {
  event.preventDefault(); 
  aboutMe.style.display = 'none';
  skills.style.display = 'block';
  certs.style.display = 'none';

});

document.querySelector(".about-item__certs").addEventListener("click", function(event) {
  event.preventDefault(); 
  aboutMe.style.display = 'none';
  skills.style.display = 'none';
  certs.style.display = 'block';
});