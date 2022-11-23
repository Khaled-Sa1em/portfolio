import { navbar, navbarList } from './constants.js';
import { NavItems } from './data/NavbarItems.js';
import { setNavbar, openNavList, closeNavList } from "./navbar.js";

document.addEventListener("DOMContentLoaded", () => {
    setNavbar(navbarList, NavItems);
});

navbar.addEventListener("click", () => openNavList());

closeNavList();