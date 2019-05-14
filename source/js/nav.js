  'use strict';

  var navMain = document.querySelector('.navigation');
  var navToggle = document.querySelector('.navigation__toggle');
  // var navImage = document.querySelector('.navigation__image');

  navMain.classList.remove('navigation--nojs');


  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation--opened')) {
      // navImage.classList.remove('navigation__image--opened');
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
    } else {
      // navImage.classList.add('navigation__image--opened');
      navMain.classList.add('navigation--opened');
      navMain.classList.remove('navigation--closed');
    }
  });
