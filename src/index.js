const header = document.getElementById('header');
const hamburguerMenu = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
const navLogo = document.querySelector('.nav__logo > img');

hamburguerMenu.addEventListener('click', (e) => {

    console.log('u clicked hamburguer uwu');
    nav.classList.toggle('show-menu');

})

document.addEventListener('scroll', (e) => {

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navLogo.src = '/images/logo-footer.svg';
    }
    else {
        header.classList.remove('scrolled');
        navLogo.src = '/images/logo.svg';
    }

})

document.addEventListener('DOMContentLoaded', (e) => {

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navLogo.src = '/images/logo-footer.svg';
    }

})