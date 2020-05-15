const navBar = document.getElementById("navBar");

document.addEventListener("scroll", () => {
    if (window.pageYOffset < navBar.clientHeight) {
      navBar.classList.remove("filled");
    } else {
      navBar.classList.add("filled");
    }
  });