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
