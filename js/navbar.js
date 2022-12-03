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
};

/**
 * * Function to show the social navbar when click.
 * @returns void
 */
export const openSocialNavList = () => {
  document.querySelector("#navbar-social").classList.toggle("active");

  document.querySelectorAll(".navbar__social__list li")?.forEach((el) => {
    el.classList.toggle("active");
    el.classList.remove("selected");
  });
};

/**
 * * Function to close ANY navbar when click on anywhere.
 * * @param selectorNavbar
 * @returns void
 */
const closeGeneralNavbar = (selectorNavbar) => {
  document.addEventListener("click", (e) => {
    if (e.target.id !== selectorNavbar) {
      document
        .querySelectorAll(`#${selectorNavbar} li`)
        ?.forEach((el) => el.classList.remove("active"));
    }
  });
};

/**
 * * Function to close items of the primary navbar.
 * @returns void
 */
export const closeNavList = () => {
  document.addEventListener("click", (e) => {
    closeGeneralNavbar("navbar-primary-list");
  });
};

/**
 * * Function to close social navbar.
 * @returns void
 */
export const closeSocialNavList = () => {
  document.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("navbar__list--item-link")) {
      e.target.parentNode.parentNode.classList.add("selected");
    }

    if (
      e.target.id !== "navbar-social-list" &&
      document.getElementById("navbar-social").classList.contains("active")
    ) {
      document.getElementById("navbar-social").click();
    }

    closeGeneralNavbar("navbar-social-list");
  });
};
