var module = (function () {
    var burgerMenu = document.querySelector('.burger-wrap__menu-burger-wrap');
    var crossMenu = document.querySelector('.burger-wrap__menu-cross-wrap');
    var nav = document.querySelector('.navigation');
    var navList =    document.querySelector('.navigation__list');

    burgerMenu.addEventListener('click', function (e) {
        burgerMenu.classList.add('menu-burger-wrap--mod-js');
        crossMenu.classList.add('menu-cross-wrap--mod-js');
        nav.classList.add('navigation--mod-js');
        navList.classList.add( 'navigation__list--mod-js');
    });

    crossMenu.addEventListener('click', function (e) {
        burgerMenu.classList.remove('menu-burger-wrap--mod-js');
        crossMenu.classList.remove('menu-cross-wrap--mod-js');
        nav.classList.remove('navigation--mod-js');
        navList.classList.remove('navigation__list--mod-js');
    });

    burgerMenu.addEventListener('touchstart', function (e) {
        burgerMenu.classList.add('menu-burger-wrap--mod-js');
        crossMenu.classList.add('menu-cross-wrap--mod-js');
        nav.classList.add('navigation--mod-js');
        navList.classList.add('navigation__list--mod-js');
    });
    
    crossMenu.addEventListener('touchstart', function(e) {
        burgerMenu.classList.remove('menu-burger-wrap--mod-js');
        crossMenu.classList.remove('menu-cross-wrap--mod-js');
        nav.classList.remove('navigation--mod-js');
        navList.classList.remove('navigation__list--mod-js');
    });
})();