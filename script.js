// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // View Profile buttons: show a friendly alert (or replace with modal later)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Profile';
      alert(`You clicked on ${name}'s profile!`);
    });
  });

  // Dark / Light mode toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  });
});
