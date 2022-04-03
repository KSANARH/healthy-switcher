document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 7000,
      });
    });

    let menu_burger = document.querySelector('.menu-burger');
    let menu = document.querySelector('.menu');
    let back = document.querySelector('body');
    let menu_list = document.querySelector('.menu__list');
    
    menu_burger.onclick = function(){
        menu_burger.classList.toggle('active');
        menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
    
