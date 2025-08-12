// dark-theme-toggle.js: Handles dark theme toggling and persistence
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
  }

  function initThemeToggle() {
    // Add toggle button to navbar or top right
    let btn = document.getElementById('theme-toggle-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle-btn';
      btn.innerHTML = '🌙';
      btn.title = 'Toggle dark theme';
      btn.style.position = 'fixed';
      btn.style.top = '16px';
      btn.style.right = '16px';
      btn.style.zIndex = '9999';
      btn.style.background = '#222';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.padding = '8px 12px';
      btn.style.borderRadius = '20px';
      btn.style.cursor = 'pointer';
      document.body.appendChild(btn);
    }
    btn.onclick = toggleTheme;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(theme);
    initThemeToggle();
  });
})();
