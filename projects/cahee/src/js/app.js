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

  // document.addEventListener("scroll", () => {
  //   if (window.pageYOffset < burger.clientHeight) {
  //     burger.classList.remove("filled");
  //   } else {
  //     burger.classList.add("filled");
  //   }
  // });
  // burger.addEventListener("click", () => {
  //   mobileMenu.classList.toggle("active");
  // });

  function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "8e0a97af9386fef",
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12
    });
  }