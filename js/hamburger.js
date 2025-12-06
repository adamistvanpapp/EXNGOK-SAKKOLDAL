// Simple toggle for the header hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('hamburgerMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    // Optional: close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') menu.style.display = 'none';
    });
});