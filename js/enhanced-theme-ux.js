// enhanced-theme-ux.js: Improved dark/light mode toggle for enhanced UX
(function() {
  const DARK_THEME_CLASS = 'dark-theme';
  const DARK_THEME_CSS = 'css/dark-theme.css';
  const THEME_KEY = 'dd_theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add(DARK_THEME_CLASS);
      if (!document.getElementById('dark-theme-css')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = DARK_THEME_CSS;
        link.id = 'dark-theme-css';
        document.head.appendChild(link);
      }
    } else {
      document.body.classList.remove(DARK_THEME_CLASS);
      const link = document.getElementById('dark-theme-css');
      if (link) link.remove();
    }
  }

  function toggleTheme() {
    const current = localStorage.getItem(THEME_KEY) === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, current);
    applyTheme(current);
    updateButton(current);
  }

  function updateButton(theme) {
    let btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      btn.style.background = theme === 'dark' ? '#222' : '#eee';
      btn.style.color = theme === 'dark' ? '#fff' : '#222';
    }
  }

  function initThemeToggle() {
    let btn = document.getElementById('theme-toggle-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle-btn';
      btn.style.position = 'fixed';
      btn.style.top = '16px';
      btn.style.right = '16px';
      btn.style.zIndex = '9999';
      btn.style.border = 'none';
      btn.style.padding = '8px 12px';
      btn.style.borderRadius = '20px';
      btn.style.cursor = 'pointer';
      document.body.appendChild(btn);
    }
    btn.onclick = toggleTheme;
    updateButton(localStorage.getItem(THEME_KEY) || 'light');
  }

  document.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(theme);
    initThemeToggle();
  });
})();
