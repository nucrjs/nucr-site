// Mobile navigation toggle + dropdown handling
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // On touch/mobile, first tap on a parent item opens its submenu
  document.querySelectorAll('.main-nav .has-sub > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        var li = link.parentElement;
        if (!li.classList.contains('open')) {
          e.preventDefault();
          li.classList.add('open');
        }
      }
    });
  });
});
