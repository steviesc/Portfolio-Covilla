//Window open effects
let topEl = document.querySelector(".open-top");
let bottomEl = document.querySelector(".open-bottom");

window.addEventListener("load", () => {
  topEl.style.top = "-50vh";
  bottomEl.style.bottom = "-50vh";
});

//Navigation scroll effects
let navShade = document.querySelector(".navigation-shade");
let brand = document.querySelector(".brand");
let navButton = document.querySelector(".nav-button-toggle");
let navContent = document.querySelector(".nav-content");
let leftNav = document.querySelector(".left-nav");
let navMenu = document.querySelector(".nav-menu");
window.addEventListener("scroll", () => {
  if (scrollY <= 600) {
    navShade.style.borderColor = `rgba(239, 239, 247, ${
      0.00033333 * scrollY
    });`;
    navShade.style.transform = `translate3d(0px, ${
      -100 + scrollY / 6
    }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`;
    navShade.style.height = 80 - 0.025 * scrollY + "px";
    brand.style.color = `rgb(${255 - 0.425 * scrollY + 8}, ${
      255 - 0.425 * scrollY + 28
    }, ${255 - 0.425 * scrollY + 58})`;
    navButton.style.color = `rgb(${255 - 0.425 * scrollY + 8}, ${
      255 - 0.425 * scrollY + 28
    }, ${255 - 0.425 * scrollY + 58})`;
    navContent.style.height = 80 - 0.025 * scrollY + "px";
    leftNav.style.height = 80 - 0.023 * scrollY + "px";
    leftNav.style.borderColor = `rgba(239, 239, 247, ${0.00033333 * scrollY});`;
    navMenu.style.opacity = `${0.0016666667 * scrollY}`;
    navMenu.style.height = `${0.16666667 * scrollY}%`;
  } else {
    navShade.style.transform =
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)";
    navShade.style.borderColor = "rgba(192, 192, 211, 0.2)";
    navShade.style.height = "65px";
    brand.style.color = "rgb(8, 28, 58)";
    navButton.style.color = "rgb(8, 28, 58)";
    navContent.style.height = "65px";
    leftNav.style.height = "64px";
    leftNav.style.borderColo = "rgba(192, 192, 211, 0.2)";
    navMenu.style.opacity = 1;
    navMenu.style.height = "100%";
  }
});

//Navigation hover effects
let linkCovers = document.querySelectorAll(".link-cover");
let navFooterLinks = document.querySelectorAll(".nav-link, .footer-link");
navFooterLinks.forEach((element, i) => {
  element.addEventListener("mouseover", () => {
    linkCovers[i].style.opacity = 1;
    linkCovers[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)";
    linkCovers[i].style.transition = "0.5s";
  });
  element.addEventListener("mouseout", () => {
    linkCovers[i].style.opacity = 0;
    linkCovers[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)";
    linkCovers[i].style.transition = "0.5s";
  });
});

//Right-nav Dropdown & hover effects
let rightNavButton = document.querySelector(".nav-button-toggle");
let dropdownList = document.querySelector(".dropdown-list");
let flipButton = document.querySelector(".dropdown-lottie");
let dropdownWrapper = document.querySelector(".dropdown-wrapper");
let buttonDropdown = document.querySelector(".nav-button.w-dropdown");
rightNavButton.addEventListener("click", () => {
  // rightNavButton.classList.toggle("w--open");
  dropdownList.classList.toggle("w--open");
  flipButton.classList.toggle("flipped");
  dropdownWrapper.style.opacity = 1;
  dropdownWrapper.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)";
});

document.addEventListener("click", (e) => {
  if (
    !rightNavButton.contains(e.target) &&
    !dropdownWrapper.contains(e.target)
  ) {
    flipButton.classList.remove("flipped");
    dropdownList.classList.remove("w--open");
  }
});

let locationCards = document.querySelectorAll(".location-card");
console.log(locationCards);
locationCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style =
      "transform: translate3d(0px, 0px, 0px) scale3d(1.07, 1.07, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; transition: 1s";
    card.children[0].style.color = "rgb(255, 255, 255)";
    card.children[1].style =
      "transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transition:1s";
    card.children[2].style.opacity = 1;
  });
  card.addEventListener("mouseout", () => {
    card.style =
      "transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; transition: 1s";
    card.children[0].style.color = "rgb(8, 28, 58)";
    card.children[1].style =
      "transform: translate3d(-12px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; opacity: 0";
    card.children[2].style.opacity = 0;
  });
});

//Flyout Menu effects (left nav)
let menuButton = document.querySelector(".flyout-menu");
let menuLottie = document.querySelector(".menu-lottie");
let flyoutWrapper = document.querySelector(".flyout-menu-wrapper");
let flyoutContent = document.querySelector(".flyout-menu-content");
let leftMenuButton = document.querySelector(".left-nav");
console.log(menuButton, menuLottie);
menuButton.addEventListener("click", () => {
  menuLottie.classList.toggle("menu-lottie"); //也可以用flag来写
  menuLottie.classList.toggle("menu-open");
  if (flyoutWrapper.style.display == "none") {
    flyoutWrapper.style =
      "display: flex; background-color: rgba(10, 26, 51, 0.55) ";
    flyoutContent.style =
      "transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg) transition:0.5s";
  } else {
    flyoutWrapper.style =
      "display: none; background-color: rgba(10, 26, 51, 0) ";
  }
});
document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !flyoutContent.contains(e.target)) {
    flyoutWrapper.style =
      "display: none; background-color: rgba(10, 26, 51, 0)";
    menuLottie.classList.remove("menu-open");
    menuLottie.classList.add("menu-lottie");
  }
});

let cardArrowIcons = document.querySelectorAll(".card-arrow-icon.dark");
let quickLinks = document.querySelectorAll(".quick-link-item.w-inline-block");

quickLinks.forEach((link, i) => {
  link.addEventListener("mouseover", (e) => {
    cardArrowIcons[i].style.opacity = 1;
    cardArrowIcons[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    cardArrowIcons[i].style.transition = "1s";
  });
  link.addEventListener("mouseout", (e) => {
    cardArrowIcons[i].style.opacity = 0;
    cardArrowIcons[i].style.transform =
      "translate3d(-12px, 0px, 0px) scale3d(0.8, 0.8, 1)";
  });
});

//Indicator Scroll effects
let indicatorFill = document.querySelector(".indicator-fill");
let paralaxBgs = document.querySelectorAll(".paralax-background");
window.addEventListener("scroll", () => {
  indicatorFill.style.transform = `translate3d(0px, ${
    scrollY / 34
  }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`;
  paralaxBgs.forEach((bg) => {
    bg.style.transform = `translate3d(0px, ${
      24 - scrollY / 60
    }px, 0px) scale3d(${1.05 - scrollY / 60000}, ${1.05 - scrollY / 60000}, 1)`;
    bg.style.transition = "1s";
  });
});

/* Button Hover */
let button = document.querySelector(".button");
button.addEventListener("mouseover", () => {
  button.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1)";
});
button.addEventListener("mouseout", () => {
  button.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
});

//Agents Hover
let teamCards = document.querySelectorAll(".team-card");
let teamBgs = document.querySelectorAll(".team-image .hero-background-image");
teamCards.forEach((card, i) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 12px 36px -8px rgba(58, 64, 117, 0.1)";
    card.style.transform = "scale3d(1.05, 1.05, 1)";
    card.style.transition = "0.8s";
    teamBgs[i].style.transform = "scale3d(1.1, 1.1, 1)";
    teamBgs[i].style.transition = "0.8s";
  });
  card.addEventListener("mouseout", () => {
    card.style.baxShadow = "";
    card.style.transform = "scale3d(1, 1, 1)";
    teamBgs[i].style.transform = "scale3d(1, 1, 1)";
  });
});

//Popular Posts Hover
let journalItems = document.querySelectorAll(".journal-list-item");
let journalBgs = document.querySelectorAll(
  ".journal-list-image .hero-background-image"
);
journalItems.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    item.style.boxShadow = "0 6px 24px -4px rgba(53, 64, 117, 0.12)";
    item.style.transform = "scale3d(1.03, 1.03, 1)";
    item.style.transition = "0.5s";
    journalBgs[i].style.transform = "scale3d(1.07, 1.07, 1)";
    journalBgs[i].style.transition = "0.5s";
  });
  item.addEventListener("mouseout", () => {
    item.style.baxShadow = "";
    item.style.transform = "scale3d(1, 1, 1)";
    journalBgs[i].style.transform = "scale3d(1, 1, 1)";
  });
});

let journalImgs = document.querySelectorAll(
  ".large-journal-image .hero-background-image, .journal-card-image .hero-background-image"
);
journalImgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.07, 1.07, 1)";
    img.style.transition = "1s";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    img.style.transition = "1s";
  });
});

/* Journal Card Hover */
let journalCards = document.querySelectorAll(".journal-card");
journalCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "translate3d(0px, 0px, 0px) scale3d(0.98, 0.98, 1)";
    card.style.borderColor = "rgba(192, 192, 211, 0.2)";
    card.style.transition = "1s";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    card.style.borderColor = "rgba(192, 192, 211, 0)";
  });
});

/* Button Hover */
let buttonOutlines = document.querySelectorAll(".outline-button, .button");
buttonOutlines.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transform =
      "translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1)";
    button.style.transition = "1s";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  });
});
