// Bejelentkezés gomb és üzenet
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

// Teszt felhasználók
const users = [
    { username: 'adam', password: '1234' },
    { username: 'admin', password: 'admin' }
];

// Login logika
loginBtn.onclick = function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        message.textContent = "Sikeres bejelentkezés!";
        message.style.color = "green";
    } else {
        message.textContent = "Hibás felhasználónév vagy jelszó!";
        message.style.color = "red";
    }
};
