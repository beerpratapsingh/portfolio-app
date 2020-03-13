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
    onScroll();
    let windowScroll = $(window).scrollTop();     
    if (windowScroll >= wHeight) {
      $('.aside-menu').addClass('fixed');
    } else{
      $('.aside-menu').removeClass('fixed');
    }
  })
});


function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.aside-menu ul li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.aside-menu ul li a').removeClass("active"); //added to remove active class from all a elements
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
      // $('.nav-bar a').removeClass('active');
    }
  });
}


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