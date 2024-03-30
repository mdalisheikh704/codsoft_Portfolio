let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('ul');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('show');
});