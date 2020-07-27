const navBar = document.getElementById("navBar");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileNav");


document.addEventListener("scroll", () => {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("filled");
    burger.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
    burger.classList.add("filled");
  }
});