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

// ON-SALE SLIDER
const scrollers = document.querySelectorAll(".scroller");

// looking for media query on if user does not have reduced-motion turned on
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

// displays data animation (if user matches query)
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
