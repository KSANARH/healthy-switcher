let menu_burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.btn-entr-registr');
let lang = document.querySelector('.lang')
let back = document.querySelector('body');
let menu_burger_all = document.querySelector('.menu-burger-all');

menu_burger_all.onclick = function(){
    menu_burger.classList.toggle('active');
    menu.classList.toggle('active');
    lang.classList.toggle('active');
    back.classList.toggle('lock');
}