/**
 * @param itemsInList []
 * @returns void
 * * Function to iterate on the items and set all into DOM in navbarList.
 */
export const setNavbar = (elementToAppendIn, itemsInList = [], navType) => {
    // ! for -> performance for => is faster than forEach 
    // ! but here it's not a big deal
    itemsInList.forEach((el, index) => {

        if (navType === 'primary') {

            const oneRow = ` <li class="navbar__list--item navbar__primary__list--item">
            <a href="#" class="navbar__list--item-link" data-title="${el.itemTitle}">
            <i class="demo-icon ${el.itemIconClass}"></i></a></li>`
            elementToAppendIn.insertAdjacentHTML('beforeend', oneRow);

        } else {

            const theta = 360 / itemsInList.length;
            const radius = 65;

            let th = index * theta;
            if (el.id === 'root') {
                return;
            }
            let x = radius * Math.sin(th * Math.PI / 180)
            let y = radius * Math.cos(th * Math.PI / 180)

            const oneRow = ` <li class="navbar__list--item " style = "--translate:translate(${x}px,${-y}px); --transition-delay: .${index}s "  >
            <a href="#" target='_blank' class="navbar__list--item-link " id ='${el.itemTitle}' data-title="${el.itemTitle}">
            <i class="demo-icon ${el.itemIconClass}"></i></a></li>`


            elementToAppendIn.insertAdjacentHTML('beforeend', oneRow);

            const link = document.querySelector(`#${el.itemTitle}`);
            link.addEventListener('click', function (e) {
                e.preventDefault();
                setTimeout(function () {
                    window.open('https://www.google.com/');
                }, "2000");
            });
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
    document.querySelectorAll(".navbar__social__list li")?.forEach((el) => {
        el.classList.toggle("active");
        // remove selected class 
        el.classList.remove("selected");
    });
};

/**
 * * Function to close navbar when click on anywhere.
 * @returns void
 */
export const closeNavList = () => {
    document.addEventListener("click", (e) => {
        if (e.target.id !== "navbar-primary-list") {
            document.querySelectorAll(".navbar__primary__list li")?.forEach((el) => el.classList.remove("active"));

        }
    });
};

// !* copy i will develop it 
export const closeSocialNavList = () => {
    document.addEventListener("click", (e) => {
        // open social link
        if (e.target.parentNode.classList.contains("navbar__list--item-link")) {
            e.target.parentNode.parentNode.classList.add("selected");
        }

        if (e.target.id !== "navbar-social-list") {
            document.querySelectorAll(".navbar__social__list li")?.forEach((el) => el.classList.remove("active"));
            document.querySelector('#navbar-social').classList.remove('active');
        }

    });
};


// open social media link 
// const openLink = function (e) {
//     this.classList.add('selected');
// }

// when press on social links 
// const links = document.querySelectorAll('.navbar__social__list .navbar__list--item-link');

