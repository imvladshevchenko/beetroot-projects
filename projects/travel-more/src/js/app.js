// let currentNumber = document.getElementById("tel");
// let newNumber = "07-1111-1111";
// let australiaNumber = '07 3177 7444';
// let id = "UA-49112570-1";

// function changeTel() {
//   if (id === ga.q[0][1] && currentNumber.innerHTML === australiaNumber){
//     currentNumber.onclick = function () {
//       currentNumber.setAttribute("href", "tel:0711111111");
//       currentNumber.innerHTML = newNumber;

//       let winheight, docheight, trackLength;

//       function getmeasurements() {
//         winheight =
//           window.innerHeight ||
//           (document.documentElement || document.body).clientHeight;
//         docheight = getDocHeight();
//         trackLength = docheight - winheight;
//       }

//       function getDocHeight() {
//         let D = document;
//         return Math.max(
//           D.body.scrollHeight,
//           D.documentElement.scrollHeight,
//           D.body.offsetHeight,
//           D.documentElement.offsetHeight,
//           D.body.clientHeight,
//           D.documentElement.clientHeight
//         );
//       }

//       function amountscrolled() {
//         let scrollTop =
//           window.pageYOffset ||
//           (
//             document.documentElement ||
//             document.body.parentNode ||
//             document.body
//           ).scrollTop;
//         let pctScrolled = Math.floor((scrollTop / trackLength) * 100);

//         document.cookie = 'ScrollTracking' + '=' + pctScrolled + "% scrolled";
//       }

//       getmeasurements();

//       window.addEventListener(
//         "resize",
//         function () {
//           getmeasurements();
//         },
//         false
//       );

//       window.addEventListener(
//         "scroll",
//         amountscrolled()       
//       );
//     };
//   }
// }

// changeTel()