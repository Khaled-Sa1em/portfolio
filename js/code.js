// make array of sections
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav--link");
// use bubbling
// or propagation
// make event on nave itself
// then get the target id
// then subtract section id from it
// then remove active class from all section
// then give to the section with id we abstract from target id
const nav = document.addEventListener("click", (e) => {
  if (e.target.id.substring(0, e.target.id.indexOf("-")) !== "nav") {
    // remove active class from all sections first
    sections.forEach((section) => section.classList.remove("active"));

    // remove active class from all links first
    navLinks.forEach((link) => {
      link.classList.remove("active--link");
    });
    // then add active link to selected section
    document
      .getElementById(e.target.id.substring(0, e.target.id.indexOf("-")))
      .classList.add("active");

    // add active--link to make clicked link display: none
    e.target.classList.add("active--link");

    // hide all nav links
    navLinks.forEach((link) => {
      link.classList.remove("display--link");
    });
  } else {
    if (e.target.classList.contains("display--link")) {
      // hide all links if click on nav link
      navLinks.forEach((link) => {
        link.classList.remove("display--link");
      });
    } else {
      // show all nav links
      navLinks.forEach((link) => {
        link.classList.add("display--link");
      });
    }
  }
});
