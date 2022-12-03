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
  closeSocialNavList,
} from "./navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbarPrimaryList, NavItems, "primary");
  setNavbar(navbarSocialList, SocialNavItems, "social");
});

navbarPrimary.addEventListener("click", () => openNavList());
navbarSocial.addEventListener("click", () => {
  openSocialNavList();
  toggleOverlay();
});


closeNavList();
closeSocialNavList();


// toggle overlay
export const toggleOverlay = () => {
  document.querySelector("#main").classList.toggle("overlay");
};