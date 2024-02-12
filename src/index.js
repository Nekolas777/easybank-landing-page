const hamburguerMenu = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

hamburguerMenu.addEventListener('click', (e) => {

    console.log('u clicked hamburguer uwu');
    nav.classList.toggle('show-menu');

})