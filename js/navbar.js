/**
 * @param itemsInList []
 * @returns void
 * * Function to iterate on the items and set all into DOM in navbarList.
 */
export const setNavbar = (elementToAppendIn, itemsInList = [], navType) => {
    // ! for -> performance for => is faster than forEach 
    // ! but here it's not a big deal
    itemsInList.forEach((el, index) => {
        const oneRow = document.createElement("li");
        // oneRow.classList.add("navbar__list--item");
        //  ! check this ==>>>> i've added (navbar__primary__list--item)

        if (navType === 'primary') {
            const oneRow = document.createElement("li");
            //  ! check this ==>>>> i've added (navbar__primary__list--item)
            oneRow.classList.add("navbar__primary__list--item");
            oneRow.classList.add("navbar__list--item");

            const link = document.createElement("a");
            link.href = "#";
            //  ! check this ==>>>> i've added (navbar__primary__list--item-link) instead of (navbar__list--item-link)
            link.classList.add("navbar__list--item-link");
            link.setAttribute("data-title", el.itemTitle);

            const icon = document.createElement("i");
            icon.classList.add("demo-icon", `${el.itemIconClass}`)

            link.appendChild(icon);
            oneRow.appendChild(link);
            elementToAppendIn.appendChild(oneRow);
        } else {
            // * i will try here 
            const theta = 360 / itemsInList.length;
            const radius = 60;

            let th = index * theta;
            if (el.id === 'root') {
                return;
            }
            let x = radius * Math.sin(th * Math.PI / 180)
            let y = radius * Math.cos(th * Math.PI / 180)
            console.log(th, x, y)
            const li = ` <li class="navbar__list--item " style = "--translate:translate(${x}px,${-y}px)"  >
            <a href="#" class="navbar__list--item-link" data-title="${el.itemTitle}">
            <i class="demo-icon ${el.itemIconClass}"></i></a></li>`

            elementToAppendIn.insertAdjacentHTML('beforeend', li);
        }
    });
}

/**
 * * Function to show the item list when click on the navbar button.
 * @returns void
 */
export const openNavList = () => {
    //  ! check this ==>>>>  (navbar__primary__list) instead of (navbar__list) 
    document.querySelectorAll(".navbar__primary__list li")?.forEach((el) => el.classList.toggle("active"));
};
// !* copy i will develop it 
export const openSocialNavList = () => {
    document.querySelector('#navbar-social').classList.toggle('active');
    document.querySelectorAll(".navbar__social__list li")?.forEach((el) => el.classList.toggle("active"));
};

/**
 * * Function to close navbar when click on anywhere.
 * @returns void
 */
export const closeNavList = () => {
    document.addEventListener("click", (e) => {
        //  ! check this ==>>>>  (navbar-primary-list) instead of (navbar-list) 
        if (e.target.id !== "navbar-primary-list") {
            //  ! check this ==>>>>  (navbar__primary__list) instead of (navbar__list) 
            document.querySelectorAll(".navbar__primary__list li")?.forEach((el) => el.classList.remove("active"));
            
        }
    });
};

// !* copy i will develop it 
export const closeSocialNavList = () => {
    document.addEventListener("click", (e) => {
        if (e.target.id !== "navbar-social-list") {
            document.querySelectorAll(".navbar__social__list li")?.forEach((el) => el.classList.remove("active"));
            document.querySelector('#navbar-social').classList.remove('active');
        }
    });
};

