window.onscroll = function () {
  stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Footer current year update
const currentYear = document.createTextNode(new Date().getFullYear());
let footerYear = document.getElementById("copyright");
footerYear.appendChild(currentYear);

//Drawer functions

const drawer = document.querySelector(".drawer");
const drawerLines = document.querySelectorAll(".drawer-line");
const mobileBar = document.querySelector(".mobile-bar");

let showNav = false;
drawer.addEventListener("click", toggleNav);

function toggleNav() {
  if (!showNav) {
    drawer.classList.add("close");
    mobileBar.classList.add("open");
    document.getElementById("mobile-bar").style.width = "max-content";
    document.getElementById("mobile-bar").style.right = "0";

    showNav = true;
  } else {
    drawer.classList.remove("close");
    mobileBar.classList.remove("open");
    document.getElementById("mobile-bar").style.width = "0";
    document.getElementById("mobile-bar").style.right = "-20vw";
    showNav = false;
  }
}

document.getElementsByTagName("a").addEventListener("click", (e) => {
  document.getElementById("mobile-bar").style.width = "0";
  document.getElementById("mobile-bar").style.right = "-20vw";
});
