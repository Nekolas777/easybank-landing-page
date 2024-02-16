//const mainContent = document.getElementById('main');
const header = document.getElementById('header');
const hamburguerMenu = document.getElementById('nav-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav-menu');

const navLogo = document.querySelector('.nav__logo > img');

function changesStateMenuClicked () {

    console.log('u clicked hamburguer uwu');
    nav.classList.toggle('show-menu');
    document.body.classList.toggle('overlay');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-x');

}

function ChangeStateScrolled (isScrolled) {

    if (isScrolled) {
        header.classList.add('scrolled');
        navLogo.src = '/images/logo-footer.svg';
        hamburguerMenu.style.color = '#FFF';
    }
    else {
        header.classList.remove('scrolled');
        navLogo.src = '/images/logo.svg';
        hamburguerMenu.style.color = '#000';
    }

}

document.addEventListener('scroll', (e) => {

    ChangeStateScrolled(window.scrollY > 0);

})

document.addEventListener('DOMContentLoaded', (e) => {

    ChangeStateScrolled(window.scrollY > 0);

})

hamburguerMenu.addEventListener('click', changesStateMenuClicked)