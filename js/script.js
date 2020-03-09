let mainNavLinks = document.querySelectorAll(".nav-bar ul li a");
let mainSections = document.querySelectorAll(".page-main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


$(document).ready( () => {
  $('#submitBtn').on('click', (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log('Clicked');
    console.log('====================================');
  })
})