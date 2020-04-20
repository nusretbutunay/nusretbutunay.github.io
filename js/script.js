window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const currentYear = document.createTextNode(new Date().getFullYear());
let footerYear = document.getElementById("footer-year");
footerYear.appendChild(currentYear);

//Drawer functions

const drawer = document.querySelector(".drawer");
//const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links");
//const navItems = document.querySelectorAll(".nav-item");

let showNav = false;
drawer.addEventListener("click", toggleNav);

function toggleNav() {
  if (!showNav) {
    drawer.classList.add("close");
    navLinks.classList.add("show");
    showNav = true;
  } else {
    drawer.classList.remove("close");
    navLinks.classList.remove("show");
    showNav = false;
  }
}
