let wheel = document.getElementById("wheel");
let wheelMobile = document.getElementById("wheelMobile");
let wheelBtn = document.getElementById("wheelBtn");
let modal = document.getElementById("modal");
let modalBtn = document.getElementById("modalBtn");
let prize = document.getElementById("prize");
let text = document.getElementById("text");
let buttonText = document.getElementById("buttonText");
let triesQty = document.getElementById("triesQty");
let triesQtyMobile = document.getElementById("triesQtyMobile");
let overlay = document.getElementById("overlay");

wheelBtn.addEventListener("click", spin, false);
modalBtn.addEventListener("click", playMore, false);

function spin() {
  wheelBtn.classList.add("animation-in-process")
  triesQty.innerHTML = "1";
  triesQtyMobile.innerHTML = "1";
  let deg = 770;
  let css = "-webkit-transform: rotate(" + deg + "deg)";
  wheel.setAttribute("style", css);
  wheelMobile.setAttribute("style", css);
  function modalPopup() {
    modal.classList.add("modal-active");
    overlay.classList.add("overlay-active");
  }
  setTimeout(modalPopup, 2500);
}

function playMore() {
  modalClosed();
  function modalClosed() {
    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
  }
  let deg = 1450;
  let css = "-webkit-transform: rotate(" + deg + "deg)";
  wheel.setAttribute("style", css);
  wheelMobile.setAttribute("style", css);
  prize.innerHTML = "500$ + 20 FS";
  text.innerHTML = "Регистрируйся и забирай призы";
  buttonText.innerHTML = "забрать призы";
  triesQty.innerHTML = "0";
  triesQtyMobile.innerHTML = "0";
  function modalPopup() {
    modal.classList.add("modal-active");
    overlay.classList.add("overlay-active");
    modalBtn.href = "/";
  }
  setTimeout(modalPopup, 2500);
}
