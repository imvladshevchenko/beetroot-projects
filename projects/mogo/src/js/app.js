const navBar = document.getElementById("navBar");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileNav");
const toTop = document.getElementById("to-top");

// const DATA = {
//   names: ["about", "service", "work", "blog", "contact"],
// };

// navBar.innerHTML = `
// <div class="container">
// 			<a href="/" class="navigation__logo">MoGo</a>
// 			<button class="navigation__burger" id="burger">
// 				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
// 					class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
// 					<path fill="currentColor"
// 						d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
// 					</path>
// 				</svg>
// 			</button>
// 			<div id="mobileNav" class="navigation__mobile-nav fadeInRight">
// 				<ul class="navigation__list">
//           ${DATA.names.map((item) => {
//             `<li class="navigation__item">
// 						<a href="#${item}" class="navigation__link">${item}</a>
// 					</li>`;
//           })}
// 					<li class="navigation__item">
// 						<button class="navigation__btn">
// 							<svg xmlns="http://www.w3.org/2000/svg" width="17.62" height="14.031" viewBox="0 0 17.62 14.031">
// 								<path id="SHOPPING-CART-icon.svg"
// 									d="M1501.73,40.663h0l-2.48,5.5h0a0.815,0.815,0,0,1-.7.485h0l-7.12.475,0.41,1.177h7.76a1.65,1.65,0,1,1-1.65,1.651h-7.7a1.65,1.65,0,1,1-1.65-1.651h1.49l-3.18-9.075h-1.89a0.825,0.825,0,0,1,0-1.65h2.48a0.835,0.835,0,0,1,.78.554h0l0.48,1.373h12.21a0.826,0.826,0,0,1,.83.825A0.941,0.941,0,0,1,1501.73,40.663Zm-12.39.487,1.52,4.357,7.09-.473,1.75-3.884h-10.36Z"
// 									transform="translate(-1484.19 -37.563)" />
// 							</svg>
// 						</button>
// 					</li>
// 					<li class="navigation__item">
// 						<button class="navigation__btn">
// 							<svg xmlns="http://www.w3.org/2000/svg" width="17.62" height="17.625" viewBox="0 0 17.62 17.625">
// 								<path id="MAGNIFYING-GLASS-icon.svg"
// 									d="M1561.32,50.983a1.652,1.652,0,0,1-2.34,2.334h0l-4.83-4.836a6.627,6.627,0,1,1,2.33-2.334l4.84,4.836h0ZM1550.8,37.85a4.95,4.95,0,1,0,4.95,4.95A4.952,4.952,0,0,0,1550.8,37.85Z"
// 									transform="translate(-1544.19 -36.188)" />
// 							</svg>
// 						</button>
// 					</li>
// 				</ul>
// 			</div>
// 			<nav class="navigation__nav">
//         <ul class="navigation__list">
//         ${DATA.names.map((item) => {
//           `<li class="navigation__item">
//           <a href="#${item}" class="navigation__link">${item}</a>
//         </li>`;
//         })}
// 					<li class="navigation__item">
// 						<button class="navigation__btn">
// 							<svg xmlns="http://www.w3.org/2000/svg" width="17.62" height="14.031" viewBox="0 0 17.62 14.031">
// 								<path id="SHOPPING-CART-icon.svg"
// 									d="M1501.73,40.663h0l-2.48,5.5h0a0.815,0.815,0,0,1-.7.485h0l-7.12.475,0.41,1.177h7.76a1.65,1.65,0,1,1-1.65,1.651h-7.7a1.65,1.65,0,1,1-1.65-1.651h1.49l-3.18-9.075h-1.89a0.825,0.825,0,0,1,0-1.65h2.48a0.835,0.835,0,0,1,.78.554h0l0.48,1.373h12.21a0.826,0.826,0,0,1,.83.825A0.941,0.941,0,0,1,1501.73,40.663Zm-12.39.487,1.52,4.357,7.09-.473,1.75-3.884h-10.36Z"
// 									transform="translate(-1484.19 -37.563)" />
// 							</svg>
// 						</button>
// 					</li>
// 					<li class="navigation__item">
// 						<button class="navigation__btn">
// 							<svg xmlns="http://www.w3.org/2000/svg" width="17.62" height="17.625" viewBox="0 0 17.62 17.625">
// 								<path id="MAGNIFYING-GLASS-icon.svg"
// 									d="M1561.32,50.983a1.652,1.652,0,0,1-2.34,2.334h0l-4.83-4.836a6.627,6.627,0,1,1,2.33-2.334l4.84,4.836h0ZM1550.8,37.85a4.95,4.95,0,1,0,4.95,4.95A4.952,4.952,0,0,0,1550.8,37.85Z"
// 									transform="translate(-1544.19 -36.188)" />
// 							</svg>
// 						</button>
// 					</li>
// 				</ul>
// 			</nav>
// 		</div>
// `;

document.addEventListener("scroll", () => {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("filled");
    toTop.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
    toTop.classList.add("filled");
  }
});

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


const first = 1;
const second = 2;

const func = (a, b) => a + b;

func(first, second);
