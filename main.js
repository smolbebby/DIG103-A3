console.log("Initialised.");

// NAVIGATION MENU - OPEN AND CLOSE MOBILE MENU
const mobileNavigation = document.querySelector(".navigation-subsection");
const htmlBody = document.querySelector("body");
const openedNavigation = document.querySelector(".hamburger-button-opened");
const closedNavigation = document.querySelector(".hamburger-button-closed");
let toggleStatus = 1;

function toggleNavigation() {
  if (toggleStatus == 1) {
    mobileNavigation.style.display = "none";
    htmlBody.style.overflowY = "scroll";
    openedNavigation.style.display = "none";
    closedNavigation.style.display = "flex";

    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    mobileNavigation.style.display = "block";
    htmlBody.style.overflowY = "hidden";
    openedNavigation.style.display = "flex";
    closedNavigation.style.display = "none";
    toggleStatus = 1;
  }
}

// ON-SALE SLIDER
const scrollers = document.querySelectorAll(".scroller");

//if user does not have reduced motion, proceed with using animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

//display data animation (if the above matches to user preference of no reduce)
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    //look for scrollerInner property in the html, then sends an array
    const scrollerInner = document.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    //forEach loop to duplicate array alongside hide the duplicates from screenreaders
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
