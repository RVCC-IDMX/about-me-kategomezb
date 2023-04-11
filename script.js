/*toggle the menu on and off when the hamburger is clicked*/

const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


