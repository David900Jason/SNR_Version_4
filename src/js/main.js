// Import our custom CSS
import "../scss/styles.scss";

// Put a transform of 10px once on all menu-items
const menuLinks = document.querySelectorAll(".header__link");
const mobileMenu = document.querySelector(".header__mobile");

// Store the collapse state
let mobileMenuState = mobileMenu.dataset.collapse;

function toggleStaggeringAnimation(mobileMenuState) {
  const reverse = mobileMenuState === "true";
  staggeringAnimation(menuLinks, reverse);
}

window.onresize = toggleStaggeringAnimation;

mobileMenu.onclick = () => {
  mobileMenuState = mobileMenuState === "false" ? "true" : "false";
  mobileMenu.dataset.collapse = mobileMenuState;
  toggleStaggeringAnimation(mobileMenuState);
};

function staggeringAnimation(elements, reverse) {
  const [translateX, transition] =
    window.innerWidth <= 991
      ? [reverse ? "-100%" : "0%", `${600}ms transform ${"*"}ms`] // * for brevity
      : ["0%", "none"];

  elements.forEach((element, i) => {
    element.style.transform = `translateX(${translateX})`;
    element.style.transition = transition.replace("*", i * 100); // Replace * with delay
  });
}

// Stop scrolling animation
const cards = document.querySelectorAll(".cards .card");

window.onscroll = () => {
  // Get page scrolling value
  const pageScroll = window.scrollY;

  if (window.innerWidth > 1230) {
    if (pageScroll >= 175) {
      cards.forEach((c) => {
        c.style.transform = "translateY(0)";
      });
    }

    if (pageScroll < 200 || window.innerWidth <= 1230) {
      cards.forEach((c) => {
        c.style.transform = "translateY(-25rem)";
      });
    }
  }
};
