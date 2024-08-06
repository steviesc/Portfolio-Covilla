//Window open effects
let topEl = document.querySelector(".open-top");
let bottomEl = document.querySelector(".open-bottom");

window.addEventListener("load", () => {
  topEl.style.top = "-50vh";
  bottomEl.style.bottom = "-50vh";
});

//Vacations card effects
let cards = document.querySelectorAll(".vacations-verticle-card");
console.log(cards);
for (let card of cards) {
  card.onmouseover = () => {
    card.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.02, 1.02, 1)";
    card.style.borderColor = "rgba(192, 192, 211, 0)";
    card.style.backgroundColor = "rgba(255, 255, 255)";
  };
  card.onmouseout = () => {
    card.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    card.style.borderColor = "rgba(192, 192, 211, 0.2)";
    card.style.backgroundColor = "rgba(255, 255, 255,0)";
  };
}

let heroBgImgs = document.querySelectorAll(
  ".verticle-card-image .hero-background-image"
);
time = 0;
heroBgImgs.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    let now = new Date();
    if (now - time >= 200) {
      let x = e.movementX;
      let y = e.movementY;
      img.style.transform = `translate3d(${x / 10}px, ${
        y / 10
      }px, 0px) scale3d(1.09, 1.09, 1)`;
      time = now;
    }
  });
  img.addEventListener("mouseout", (e) => {
    img.style.transform =
      "translate3d(-0.00144px, -0.00144px, 0px) scale3d(1, 1, 1)";
  });
});
//Vacations tab effects
let tabs = document.querySelectorAll(".vacations-tab-link");
let dots = document.querySelectorAll(".membership-dot");
let circles = document.querySelectorAll(".membership-outline-circle");
let indicator = document.querySelector(".location-indicator-fill");
let panes = document.querySelectorAll(".w-tab-pane");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onmousedown = () => {
    for (let l = 0; l <= i; l++) {
      dots[l].style.backgroundColor = "rgb(8, 28, 58)";
    }
    for (let r = tabs.length - 1; r > i; r--) {
      dots[r].style.backgroundColor = "rgb(230, 230, 243)";
    }
    for (let circle of circles) {
      circle.style.borderColor = "rgb(230, 230, 243)";
      circle.style.transform = "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
    }
    circles[i].style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    circles[i].style.borderColor = "rgb(8, 28, 58)";
    circles[i].style.transition = "1s";
    indicator.style = `width: ${25 + i * 25}%; height: 2px; transition:1s`;
    for (let pane of panes) {
      pane.classList.remove("w--tab--active");
    }
    panes[i].classList.add("w--tab--active");
    panes[i].style = "opacity: 0;transition: 2s";
    setTimeout(() => {
      panes[i].style = "opacity: 1;transition: 2s";
    }, 200);
  };
}

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
    }%, 0px) scale3d(1, 1, 1)`;
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
    navShade.style.transform = "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)";
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
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    linkCovers[i].style.transition = "0.5s";
  });
  element.addEventListener("mouseout", () => {
    linkCovers[i].style.opacity = 0;
    linkCovers[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
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
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
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

//Flyout Menu effects
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
      "display: none; background-color: rgba(10, 26, 51, 0) ";
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
window.addEventListener("scroll", () => {
  indicatorFill.style.transform = `translate3d(0px, ${
    scrollY / 112
  }%, 0px) scale3d(1, 1, 1)`;
});

//Choose Destination dropdown effects
let chooseButton = document.querySelector(".benefit-button");
let dropdownListChoose = document.querySelector(".dropdown-list-choose");
let flipButtonChoose = document.querySelector(".dropdown-lottie-choose");
let dropdownWrapperChoose = document.querySelector(".dropdown-wrapper-choose");
chooseButton.addEventListener("click", () => {
  // chooseButton.classList.toggle("w--open");
  dropdownListChoose.classList.toggle("w--open");
  flipButtonChoose.classList.toggle("flipped");
  dropdownWrapperChoose.style.opacity = 1;
  dropdownWrapperChoose.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
});

document.addEventListener("click", (e) => {
  if (
    !chooseButton.contains(e.target) &&
    !dropdownListChoose.contains(e.target)
  ) {
    dropdownListChoose.classList.remove("w--open");
    flipButtonChoose.classList.remove("flipped");
  }
});

let locationCardsChoose = document.querySelectorAll(".location-card-choose");
locationCardsChoose.forEach((card) => {
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

//Video hover effects
let videoButton = document.querySelector(".video-hover-button");
let verlay = document.querySelector(".video-button-verlay");
let videoButtonBg = document.querySelector(".video-button-background");
let buttonVideo = document.querySelector(".button-video ");
let videoIconWrapper = document.querySelector(".video-icon-wrapper");
let videoButtonWaves = document.querySelector(".video-button-waves");
videoButton.addEventListener("mouseover", () => {
  videoButton.style =
    "border-color: rgba(192, 192, 211, 0); transform: translate3d(0.0048px, 0.0048px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; background-color: rgba(255, 255, 255); will-change: transform; transition:1.5s";
  videoButtonWaves.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) ";
  videoButtonWaves.style.display = "flex";
  verlay.style.opacity = 1;
  verlay.style.display = "block";
  videoButtonBg.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  videoButtonBg.style.display = "block";
  buttonVideo.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  videoIconWrapper.style =
    "border-color: rgba(192, 192, 211, 0); background-color: rgba(8, 28, 58);";
});
videoButton.addEventListener("mouseout", () => {
  videoButton.style =
    "border-color: rgba(192, 192, 211, 0.3); transform: translate3d(0.0048px, 0.0048px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; background-color: rgba(255, 255, 255, 0); will-change: transform";
  videoButton.nextElementSibling.style.transfrom =
    "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
  videoButton.firstElementChild.style =
    "border-color: rgba(192, 192, 211, 0.3); background-color: rgba(192, 192, 211, 0.2);";
  verlay.style.opacity = 0;
  verlay.style.display = "none";
  videoButtonBg.style.transform = "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
  buttonVideo.style.transform = "translate3d(0px, 0px, 0px) scale3d(2, 2, 1)";
  videoButtonBg.style.transform = "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
  videoButtonBg.style.display = "none";
  videoButtonWaves.style.display = "none";
  videoButtonWaves.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(0, 0, 1)";
});

let waveOne = document.querySelector(".wave-one");
let waveTwo = document.querySelector(".wave-two");

videoButton.addEventListener("mousemove", (e) => {
  videoButton.style.transform = `translate3d(${e.movementX * 5}px, ${
    e.movementY * 5
  }px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`;
});

//Swiper Destinations location card
let locationSlides = document.querySelectorAll(".location-slide");
let rightArrow = document.querySelector(".slider-arrow.right");
let leftArrow = document.querySelector(".slider-arrow.w-slider-arrow-left");
let cardWrappers = document.querySelectorAll(".location-card-wrapper");
let imgWrappers = document.querySelectorAll(".location-image-wrapper");
let locationMask = document.querySelector(".location-mask");

window.addEventListener("load", () => {
  for (let i = 0; i < 4; i++) {
    locationSlides[
      i
    ].style.transform = `translateX(-${locationMask.offsetWidth}px)`;
    if (
      locationSlides[i].style.transform ==
      `translateX(${i * -locationMask.offsetWidth}px)`
    ) {
      cardWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
      imgWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    }
  }
});

let index = 0;
rightArrow.addEventListener("click", () => {
  index++;
  if (index == 3) {
    setTimeout(() => {
      locationSlides.forEach((element) => {
        element.style.transition = "none";
        element.style.transform = "translateX(0px)";
      });
      cardWrappers[index].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)";
      locationSlides[index].style.transform = `translateX(-${
        cardWrappers[index].offsetWidth * 4
      }px)`;
      locationSlides[index].style.transition = "0s";
      index = -1;
      for (let i = 0; i < 4; i++) {
        if (
          locationSlides[i].style.transform ==
          `translateX(${i * -locationMask.offsetWidth}px)`
        ) {
          cardWrappers[i].style.transform =
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
          imgWrappers[i].style.transform =
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
        }
      }
    }, 500);
  } else {
    locationSlides.forEach((element, i) => {
      if (i == 3) {
        setTimeout(() => {
          locationSlides[3].style.transition = "0.5s";
        }, 500);
      } else {
        element.style.transition = "0.5s";
      }
      element.style.transform = `translateX(${
        -locationMask.offsetWidth * (index + 1)
      }px)`;
    });
  }
  for (let i = 0; i < 4; i++) {
    if (
      locationSlides[i].style.transform ==
      `translateX(${i * -locationMask.offsetWidth}px)`
    ) {
      cardWrappers.forEach((ele) => {
        ele.style.transform = "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)";
        ele.style.transition = "1s";
      });
      cardWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
      imgWrappers.forEach((ele) => {
        ele.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)";
        ele.style.transition = "1s";
      });
      imgWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    }
  }
});
leftArrow.addEventListener("click", () => {
  index--;
  if (index == -2) {
    setTimeout(() => {
      locationSlides.forEach((element) => {
        element.style.transition = "none";
        element.style.transform = `translateX(-${
          locationMask.offsetWidth * 3
        }px)`;
        cardWrappers[3].style.transform =
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
        imgWrappers[3].style.transform =
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
      });
      cardWrappers[0].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)";
      locationSlides[0].style.transform = `translateX(${cardWrappers[0].offsetWidth}px)`;
      index = 2;
    }, 500);
  } else {
    locationSlides.forEach((element, i) => {
      if (i == 0) {
        setTimeout(() => {
          locationSlides[0].style.transition = "0.5s";
        }, 500);
      } else {
        element.style.transition = "0.5s";
      }
      element.style.transform = `translateX(${
        -locationMask.offsetWidth - index * locationMask.offsetWidth
      }px)`;
    });
  }
  for (let i = 0; i < 4; i++) {
    if (
      locationSlides[i].style.transform ==
      `translateX(${i * -locationMask.offsetWidth}px)`
    ) {
      cardWrappers.forEach((ele) => {
        ele.style.transform = "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)";
        ele.style.transition = "1s";
      });
      cardWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
      imgWrappers.forEach((ele) => {
        ele.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)";
        ele.style.transition = "1s";
      });
      imgWrappers[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    }
  }
});

//Slider Background effects
let background = document.querySelector(".background.one");
console.log(background);
let sliderBackground = document.querySelector(".slider-background");
let heroRight = document.querySelector(
  ".hero-slide-arrow.w-slider-arrow-right"
);
let idxBg = 0;

heroRight.addEventListener("click", () => {
  idxBg++;
  if (idxBg == 1) {
    background.style.backgroundImage =
      'url("https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg")';
  } else if (idxBg == 2) {
    background.style.backgroundImage =
      'url("https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg")';
  } else if (idxBg == 3) {
    idxBg = 0;
    background.style.backgroundImage =
      'url("https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg")';
  }
  background.style.transition = "1s";
});

//Testimonial slide effects
let testimonialSlides = document.querySelectorAll(".testimonial-slide");
let testimonialMask = document.querySelector(".testimonial-mask");
let testimonialLeft = document.querySelector(
  ".testimonial-arrow.w-slider-arrow-left"
);
let testimonialRight = document.querySelector(
  ".testimonial-arrow.w-slider-arrow-right"
);
let trackerItems = document.querySelectorAll(".tracker-item.in-slider");
let trackerFill = document.querySelector(".tracker-fill");

let idxTest = 0;
testimonialRight.addEventListener("click", () => {
  idxTest++;
  if (idxTest == 5) {
    idxTest = 0;
  }
  testimonialSlides.forEach((ele) => {
    ele.style.transform = `translateX(-${
      idxTest * (testimonialMask.offsetWidth + 4)
    }px)`;
    ele.style.transition = "0s";
    ele.style.opacity = 0;
  });
  testimonialSlides[idxTest].style.transition = "all, opacity 1s";
  testimonialSlides[idxTest].style.visibility = "";
  testimonialSlides[idxTest].style.opacity = 1;
  trackerItems.forEach((item) => {
    item.style.opacity = 0;
  });
  trackerItems[idxTest].style.opacity = 1;
  trackerItems[idxTest].style.gridArea = `${idxTest + 1}/1/${idxTest + 2}/2`;
  trackerFill.style.transform = `translate3d(0px, ${
    66 * idxTest
  }px, 0px) scale3d(1, 1, 1)`;
});

testimonialLeft.addEventListener("click", () => {
  idxTest--;
  if (idxTest == -1) {
    idxTest = 4;
  }
  testimonialSlides.forEach((ele) => {
    ele.style.transform = `translateX(-${
      idxTest * (testimonialMask.offsetWidth + 4)
    }px)`;
    ele.style.transition = "0s";
    ele.style.opacity = 0;
  });
  testimonialSlides[idxTest].style.transition = "all, opacity 1s";
  testimonialSlides[idxTest].style.visibility = "";
  testimonialSlides[idxTest].style.opacity = 1;
  trackerItems.forEach((item) => {
    item.style.opacity = 0;
  });
  trackerItems[idxTest].style.opacity = 1;
  trackerItems[idxTest].style.gridArea = `${idxTest + 1}/1/${idxTest + 2}/2`;
  trackerFill.style.transform = `translate3d(0px, ${
    66 * idxTest
  }px, 0px) scale3d(1, 1, 1)`;
});

//About-Images move
let abouts = document.querySelector(".about-images");
let aboutImgs = document.querySelectorAll(".about-image-item");
console.log(aboutImgs);
// aboutImgs.forEach((img) => {
//   window.addEventListener("scroll", () => {
//     img.style.transform = `translate3d(${-27.5+scrollX}vw, 0px, 0px) scale3d(1, 1, 1)`;
//   })
// })
time = 0;
abouts.addEventListener("mousemove", (e) => {
  let now = new Date();
  if (now - time >= 200 && Math.abs(e.movementX < 300)) {
    aboutImgs.forEach((img) => {
      img.style.transform = `translate3d(${
        -27.5 - e.movementX * 8
      }vw, 0px, 0px) scale3d(1, 1, 1)`;
      time = now;
      img.style.transition = "3s";
    });
  }
});
abouts.addEventListener("mouseout", (e) => {
  aboutImgs.forEach((img) => {
    img.style.transform = "translate3d(-27.5vw, 0px, 0px) scale3d(1, 1, 1)";
  });
});

//About-Images hover
let teamImgLocations = document.querySelectorAll(".team-image-location");
let locationIcons = document.querySelectorAll(".team-location-icon");
let iconSubtitles = document.querySelectorAll(".team-image-location .subtitle");
teamImgLocations.forEach((location, i) => {
  location.addEventListener("mouseover", () => {
    locationIcons[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    locationIcons[i].style.transition = "1s";
    locationIcons[i].style.opacity = 1;
    iconSubtitles[i].style.transform =
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    iconSubtitles[i].style.transition = "1s";
    iconSubtitles[i].style.opacity = 1;
    overlayLights[i].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
    overlayLights[i].style.transition = "1s";
  });
  teamImgLocations.forEach((location, i) => {
    location.addEventListener("mouseout", () => {
      locationIcons[i].style.transform =
        "translate3d(0px, 12px, 0px) scale3d(0.8, 0.8, 1)";
      locationIcons[i].style.opacity = 0;
      iconSubtitles[i].style.transform =
        "translate3d(0px, 12px, 0px) scale3d(0.8, 0.8, 1)";
      iconSubtitles[i].style.opacity = 0;
      overlayLights[i].style.backgroundColor = "rgba(15, 19, 38, 0.05)";
    });
  });
});

let overlayLights = document.querySelectorAll(".overlay.extra-light");

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

let journalImg = document.querySelector(
  ".large-journal-image .hero-background-image"
);
journalImg.addEventListener("mouseover", () => {
  journalImg.style.transform =
    "translate3d(0px, 0px, 0px) scale3d(1.07, 1.07, 1)";
  journalImg.style.transition = "1s";
});
journalImg.addEventListener("mouseout", () => {
  journalImg.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  journalImg.style.transition = "1s";
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

/* Arrow Hover */
let arrows = document.querySelectorAll(".testimonial-arrow");
arrows.forEach((arrow) => {
  arrow.addEventListener("mouseover", () => {
    arrow.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.04, 1.04, 1)";
    arrow.style.transition = "1s";
    arrow.style.backgroundColor = "rgb(247, 258, 252)";
  });
  arrow.addEventListener("mouseout", () => {
    arrow.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    arrow.style.backgroundColor = "rgb(255, 255, 255)";
  });
});

/* Open/Close Video */
let videoPopup = document.querySelector(".hero-video-popup");
videoButton.addEventListener("click", () => {
  videoPopup.style.display = "flex";
});
let closeVideoButton = document.querySelector(".close-link");
closeVideoButton.addEventListener("click", () => {
  videoPopup.style.display = "none";
});
