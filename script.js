(function () {
  var buttons = document.querySelectorAll('.terminal-menu button[id]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Hide all sections
      document.querySelectorAll('.me').forEach(function (el) {
        el.classList.remove('show');
      });
      // Show matching section
      var target = document.querySelector('.me.' + this.id);
      if (target) target.classList.add('show');
      // Update active button
      buttons.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });
})();
