/**
 * @param itemsInList []
 * @returns void
 * * Function to iterate on the items and set all into DOM in navbarList.
 */
export const setNavbar = (elementToAppendIn, itemsInList = []) => {
    itemsInList.forEach(el => {
        const oneRow = document.createElement("li");
        oneRow.classList.add("navbar__list--item");

        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("navbar__list--item-link");
        link.setAttribute("data-title", el.itemTitle);

        const icon = document.createElement("i");
        icon.classList.add("demo-icon", `${el.itemIconClass}`)

        link.appendChild(icon);
        oneRow.appendChild(link);
        elementToAppendIn.appendChild(oneRow);
    });
}

/**
 * * Function to show the item list when click on the navbar button.
 * @returns void
 */
export const openNavList = () => {
    document.querySelectorAll(".navbar__list li")?.forEach((el) => el.classList.toggle("active"));
};

/**
 * * Function to close navbar when click on anywhere.
 * @returns void
 */
export const closeNavList = () => {
    document.addEventListener("click", (e) => {
        if (e.target.id !== "navbar-list") {
            document.querySelectorAll(".navbar__list li")?.forEach((el) => el.classList.remove("active"));
        }
    });
};