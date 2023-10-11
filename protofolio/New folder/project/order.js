let menu = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');

window.onscroll=()=>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}