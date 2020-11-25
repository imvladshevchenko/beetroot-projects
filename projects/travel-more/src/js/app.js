let currentNumber = document.getElementById("tel");
let newNumber = "07-1111-1111";
let id = "UA-49112570-1";

console.log(ga.q[0][1]);


function changeTel() {
  if (id === ga.q[0][1]) {
    currentNumber.onclick = function () {
      currentNumber.setAttribute("href", "tel:0711111111");
      currentNumber.innerHTML = newNumber;

      let winheight, docheight, trackLength, throttlescroll;

      function getmeasurements() {
        winheight =
          window.innerHeight ||
          (document.documentElement || document.body).clientHeight;
        docheight = getDocHeight();
        trackLength = docheight - winheight;
      }

      function getDocHeight() {
        let D = document;
        return Math.max(
          D.body.scrollHeight,
          D.documentElement.scrollHeight,
          D.body.offsetHeight,
          D.documentElement.offsetHeight,
          D.body.clientHeight,
          D.documentElement.clientHeight
        );
      }

      function amountscrolled() {
        let scrollTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        let pctScrolled = Math.floor((scrollTop / trackLength) * 100);
        console.log(pctScrolled + "% scrolled");
        document.cookie = 'ScrollTracking' + '=' + pctScrolled + "% scrolled";
      }

      getmeasurements();

      window.addEventListener(
        "resize",
        function () {
          getmeasurements();
        },
        false
      );

      window.addEventListener(
        "scroll",
        amountscrolled()       
      );
    };
  }
}

changeTel()