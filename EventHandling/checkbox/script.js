document.addEventListener('DOMContentLoaded', () => {
  const pwd = document.getElementById('passwordInput');
  const toggle = document.getElementById('toggleCheckbox');

  toggle.addEventListener('change', () => {
    pwd.type = toggle.checked ? 'text' : 'password';
  });
});
