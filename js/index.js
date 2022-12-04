import {
  navbarPrimary,
  navbarPrimaryList,
  navbarSocial,
  navbarSocialList,
} from "./constants.js";
import { NavItems } from "./data/NavbarItems.js";
import { SocialNavItems } from "./data/SocialNavItems.js";
import {
  setNavbar,
  openNavList,
  closeNavList,
  openSocialNavList,
} from "./navbar.js";
// debugger;

document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbarPrimaryList, NavItems, "primary");
  setNavbar(navbarSocialList, SocialNavItems, "social");
});

// primary navbar
navbarPrimary.addEventListener("click", (e) => {
  //! stop bubbling events
  e.stopPropagation();
  if (navbarSocial.classList.contains("active")) {
    navbarSocial.click();
  }
  openNavList();
  toggleOverlay();
});

// social navbar
navbarSocial.addEventListener("click", (e) => {
  //! stop bubbling events
  e.stopPropagation();
  if (document.getElementById('navbar-primary').children[1].children[0].classList.contains('active')) {
    navbarPrimary.click();
  }
  openSocialNavList();
  toggleOverlay();
});

closeNavList();
// closeSocialNavList();

// toggle overlay
export const toggleOverlay = () => {
  document.querySelector("#main").classList.toggle("overlay");
};
