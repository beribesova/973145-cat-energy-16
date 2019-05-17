  'use strict';

  var navMain = document.querySelector('.navigation');
  var navToggle = document.querySelector('.navigation__toggle');

  navMain.classList.remove('navigation--nojs');


  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation--opened')) {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
    } else {
      navMain.classList.add('navigation--opened');
      navMain.classList.remove('navigation--closed');
    }
  });
