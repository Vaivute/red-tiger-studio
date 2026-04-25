// Red Tiger Studio, minimal theme JS
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Preview gate
  var gateForm = document.getElementById('gate-form');
  if (gateForm) {
    var gateInput = document.getElementById('gate-input');
    var gateError = document.getElementById('gate-error');
    gateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (gateInput.value.trim().toLowerCase() === 'red') {
        sessionStorage.setItem('rts-unlocked', '1');
        document.documentElement.classList.remove('is-locked');
      } else {
        gateError.hidden = false;
        gateInput.value = '';
        gateInput.focus();
      }
    });
  }
});
