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
  console.log(e.target.id.substring(0, e.target.id.indexOf("-")));
  console.log(e.target.id.substring(0, e.target.id.indexOf("-")));
  if (e.target.id.substring(0, e.target.id.indexOf("-")) !== "nav") {
    console.log(e.target.id.substring(0, e.target.id.indexOf("-")));
    sections.forEach((section) => section.classList.remove("active"));
    document
      .getElementById(e.target.id.substring(0, e.target.id.indexOf("-")))
      .classList.add("active");

    navLinks.forEach((link) => {
      link.classList.remove("display--link");
    });
  } else {
    if (e.target.classList.contains('display--link')) {
      navLinks.forEach((link) => {
        link.classList.remove("display--link");
      });
    } else {
      navLinks.forEach((link) => {
        link.classList.add("display--link");
      });
    }
  }
});
