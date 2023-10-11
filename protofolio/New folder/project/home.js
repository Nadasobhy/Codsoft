let menu = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');

window.onscroll=()=>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 6,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
 