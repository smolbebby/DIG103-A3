console.log("Initialising");

// HAMBURGER MENU - OPEN AND CLOSE MOBILE MENU
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

function openMobileMenu() {
  mobileMenu.style.display = "flex";
  body.style.overflowY = "hidden";
}

function closeMobileMenu() {
  mobileMenu.style.display = "none";
  body.style.overflowY = "scroll";
}

// MOBILE TO DESKTOP MEDIA QUERY ASSISTANCE
// const desktopHeader = document.querySelector(".desktop-header");
// const mobileHeader = document.querySelector(".header");

// function switchToDesktop() {
//   mobileHeader.style.display = "hidden";
//   desktopHeader.style.display = "flex";
// }

// // TESTING MEDIA?
// const desktopHeader = document.querySelector(".desktop-header");
// const mobileHeader = document.querySelector(".header");

// function mobileToDesktop() {
//   window.matchMedia("(min-width: 750px").addEventListener(function (e) {
//     if (e.matches) {
//       desktopHeader.style.display = "flex";
//       mobileHeader.style.display = "none";
//     } else {
//       desktopHeader.style.display = "hidden";
//       mobileHeader.style.display = "flex";
//     }
//   });
// }

// ON-SALE SLIDER
const scrollers = document.querySelectorAll(".scroller");

//if user does not have reduced motion, proceed with using animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });

    scrollerContent.forEach((item) => {
      const secondDuplication = item.cloneNode(true);
      secondDuplication.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(secondDuplication);
    });

    scrollerContent.forEach((item) => {
      const thirdDuplication = item.cloneNode(true);
      thirdDuplication.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(thirdDuplication);
    });
  });
}
