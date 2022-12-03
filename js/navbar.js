/**
 * @param itemsInList []
 * @returns void
 * * Function to iterate on the items and set all into DOM in navbarList.
 */
export const setNavbar = (elementToAppendIn, itemsInList = [], navType) => {
  itemsInList.forEach((el, index) => {
    if (navType === "primary") {
      const oneRow = `<li class="navbar__list--item navbar__primary__list--item">
                    <a href="#" class="navbar__list--item-link" data-title="${el.itemTitle}">
                        <i class="demo-icon ${el.itemIconClass}"></i>
                    </a>
                </li>`;

      elementToAppendIn.insertAdjacentHTML("beforeend", oneRow);
    } else {
      const theta = 360 / itemsInList.length;
      const radius = 65;

      let th = index * theta;

      if (el.id === "root") {
        return;
      }

      let x = radius * Math.sin((th * Math.PI) / 180);
      let y = radius * Math.cos((th * Math.PI) / 180);

      const oneRow = `<li class="navbar__list--item " style="--translate:translate(${x}px,${-y}px); --transition-delay: 0.${index}s">
                    <a href="#" target='_blank' class="navbar__list--item-link " id='${
                      el.itemTitle
                    }' data-title="${el.itemTitle}">
                        <i class="demo-icon ${el.itemIconClass}"></i>
                    </a>
                </li>`;

      elementToAppendIn.insertAdjacentHTML("beforeend", oneRow);

      const link = document.querySelector(`#${el.itemTitle}`);

      link.addEventListener("click", function (e) {
        e.preventDefault();

        setTimeout(function () {
          link.href = el.itemLink;
          window.open(link.href);
        }, "1800");
      });
    }
  });
};

/**
 * * Function to show the item list when click on the navbar button.
 * @returns void
 */
export const openNavList = () => {
  document
    .querySelectorAll(".navbar__primary__list li")
    ?.forEach((el) => el.classList.toggle("active"));
  console.log("open----", "from openNavList");
  console.log("------------------------------------");
};

/**
 * * Function to show the social navbar when click.
 * @returns void
 */
export const openSocialNavList = () => {
  document.querySelector("#navbar-social").classList.toggle("active");

  console.log("1 open----", "from openSocialNavList");
  console.log("------------------------------------");
  document.querySelectorAll(".navbar__social__list li")?.forEach((el) => {
    el.classList.add("active"); // ! why just add
    el.classList.remove("selected");

    // !1
    document.querySelector("#main").classList.add("overlay");
    console.log("2 open----", "from openSocialNavList main");
    console.log("------------------------------------");
  });
};

/**
 * * Function to close ANY navbar when click on anywhere.
 * * @param selectorNavbar
 * @returns void
 */
// !called 2 times why??
// !!! this function doesn't has any importance 
const closeGeneralNavbar = (selectorNavbar) => {
  document.addEventListener("click", (e) => {
    if (e.target.id !== selectorNavbar) {
      document
        .querySelectorAll(`#${selectorNavbar} li`)
        ?.forEach((el) => el.classList.remove("active"));
    }
    // !2
    if (document.querySelector("main").classList.contains("overlay")) {
      console.log("if close----", "from closeGeneralNavbar main");
      console.log("------------------------------------");

      document.querySelector("main").classList.remove("overlay");
    } else {
      console.log("else close----", "from closeGeneralNavbar main");
      console.log("------------------------------------");
    }
  });
};

/**
 * * Function to close items of the primary navbar.
 * @returns void
 */
// ! and here ---> i think thats is very wrong 
// !! cause every time you call this function you new handler to click event in this element 
// !! i think you should have dispatched(=> fire it) event here now give it a handler
export const closeNavList = () => {
  document.addEventListener("click", (e) => {
    closeGeneralNavbar("navbar-primary-list");
    console.log("1 close----", "from closeNavList main");
    console.log("------------------------------------");
  });
};

/**
 * * Function to close social navbar.
 * @returns void
 */

// !! and here also like function before 
export const closeSocialNavList = () => {
  document.addEventListener("click", (e) => {
    if (e.target.parentNode.classList?.contains("navbar__list--item-link")) {
      e.target.parentNode.parentNode.classList.add("selected");
    }

    if (
      e.target.id !== "navbar-social-list" &&
      document.getElementById("navbar-social").classList.contains("active")
    ) {
      // document.getElementById("navbar-social").click();
      document.getElementById("navbar-social").classList.remove("active");
    } else if (
      document.getElementById("navbar-social").classList.contains("active")
    ) {
      // document.getElementById("navbar-social").click();
    }

    console.log("close----", "from closeSocialNavList");
    console.log("------------------------------------");
    closeGeneralNavbar("navbar-social-list");
  });
};
