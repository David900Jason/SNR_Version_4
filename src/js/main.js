// Import our custom CSS
import "../scss/styles.scss";

// Put a transform of 10px once on all menu-items
const menuLinks = document.querySelectorAll(".header__link");
const mobileMenu = document.querySelector(".header__mobile");
let mobileMenuState = mobileMenu.dataset.collapse;

if (mobileMenuState === "true") {
  staggeringAnimation(menuLinks);
} else {
  staggeringAnimation(menuLinks, true);
}

window.onresize = () => {
  if (mobileMenuState === "true") {
    staggeringAnimation(menuLinks);
  } else {
    staggeringAnimation(menuLinks, true);
  }
};

mobileMenu.onclick = () => {
  if (mobileMenuState === "false") {
    mobileMenuState = "true";
  } else {
    mobileMenuState = "false";
  }

  mobileMenu.dataset.collapse = mobileMenuState;

  if (mobileMenuState === "true") {
    staggeringAnimation(menuLinks);
  } else {
    staggeringAnimation(menuLinks, true);
  }
};

function staggeringAnimation(elements, reverse) {
  const duration = 600;

  if (reverse) {
    elements.forEach((element, i) => {
      if (window.innerWidth <= 991) {
        element.style.transform = `translateX(100%)`;
        element.style.transition = `${duration}ms transform ${i * 100}ms`;
      } else {
        element.style.transform = `translateX(0)`;
        element.style.transition = `none`;
      }
    });
    return;
  }

  elements.forEach((element, i) => {
    element.style.transform = `translateX(0)`;
    element.style.transition = `${duration}ms transform ${i * 100}ms`;
  });
}
