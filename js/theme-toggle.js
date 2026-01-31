(function () {
  var lightSheet = document.getElementById('theme-light');
  var darkSheet = document.getElementById('theme-dark');
  var toggleBtn = document.getElementById('topbar-theme-toggle');
  if (!toggleBtn) return;

  var icon = toggleBtn.querySelector('i');
  var saved = localStorage.getItem('theme') || 'light';

  function applyTheme(theme) {
    if (theme === 'dark') {
      lightSheet.disabled = true;
      darkSheet.disabled = false;
      icon.className = 'fa fa-moon-o';
    } else {
      lightSheet.disabled = false;
      darkSheet.disabled = true;
      icon.className = 'fa fa-sun-o';
    }
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }

  applyTheme(saved);

  toggleBtn.addEventListener('click', function () {
    var current = localStorage.getItem('theme') || 'light';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
})();
