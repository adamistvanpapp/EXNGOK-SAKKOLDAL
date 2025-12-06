/*Megvárja, amíg a HTML oldal teljesen betöltődik*/
document.addEventListener('DOMContentLoaded', function () {
    /*Kikeresi a HTML-ben az ID-ja alapján a hamburger gombot és a menüt*/
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('hamburgerMenu');
    if (!btn || !menu) return;

    /*Figyeli a hamburger gomb kattintásait */
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    /*Ha bárhol az oldal bármely pontjára kattintasz (a menün kívül), a menü bezáródik*/    
    document.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    /*Ha az Escape billentyűt nyomod meg, a menü bezáródik*/
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') menu.style.display = 'none';
    });
});