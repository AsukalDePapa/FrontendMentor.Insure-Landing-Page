const menu = document.getElementById('menu')
const nav = document.querySelector('nav')
const menuImg = document.getElementById('menu-img')

menu.addEventListener('click', () => {
    nav.classList.toggle('toggle-menu');

    if(!menuImg.src.match("icon-hamburger")){
        menuImg.src = "./images/icon-hamburger.svg";
    }else {
        menuImg.src = "./images/icon-close.svg";
    }
})