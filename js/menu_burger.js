let menu_burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');
let back = document.querySelector('body');
let menu_list = document.querySelector('.menu__list');

let menu__item = document.querySelectorAll('.menu__item');
 
menu_burger.onclick = function(){
menu_burger.classList.toggle('active');
menu.classList.toggle('active');
back.classList.toggle('lock');
};

[].forEach.call(menu__item, function(el) {
  el.onclick = function(e) {
  menu_burger.classList.remove('active');
  menu.classList.remove('active');
  back.classList.remove('lock');
  }
});
