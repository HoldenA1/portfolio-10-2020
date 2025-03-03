const THEME_STORAGE_KEY = 'theme';
const THEME_OWNER = document.documentElement;

const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (cachedTheme) {
  THEME_OWNER.dataset[THEME_STORAGE_KEY] = cachedTheme;
}

document.addEventListener('DOMContentLoaded', () => {
  const themePicker = document.getElementById('theme-picker');
  if (!themePicker) return;

  const defaultSelectedInput = themePicker.querySelector('input[checked]');
if (cachedTheme && cachedTheme !== defaultSelectedInput.value) {
    defaultSelectedInput.removeAttribute('checked');
    themePicker.querySelector(`input[value="${cachedTheme}"]`).setAttribute('checked', '');
  }

  themePicker.addEventListener('change', (e) => {
    const theme = e.target.value;
    if (theme === defaultSelectedInput.value) {
      delete THEME_OWNER.dataset[THEME_STORAGE_KEY];
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      THEME_OWNER.dataset[THEME_STORAGE_KEY] = theme;
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  });
});