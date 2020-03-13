$(document).ready( () => {
  $('.nav-bar').find("a").click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $('.nav-bar a').removeClass('active');
    $(this).addClass('active');
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  let wHeight = $(window).innerHeight() / 2;
  $(window).on('scroll', (ele) => {
    let windowScroll = $(window).scrollTop();     
    if (windowScroll >= wHeight) {
      $('.aside-menu').addClass('fixed');
    } else{
      $('.aside-menu').removeClass('fixed');
    }
  })
});


// const Http = new XMLHttpRequest();
// const url = 'https://formspree.io/biru.harshi@gmail.com';
// Http.open("POST", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

// $('#submitBtn').on('click', (e) => {
//   // e.preventDefault();
// })