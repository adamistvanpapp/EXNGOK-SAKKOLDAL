const registerBtn = document.getElementById('registerBtn');
const message = document.getElementById('message');

registerBtn.onclick = function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const continent = document.getElementById('continent').value;

    // Felhasználónév minimum 5 karakter
    if (username.length < 5) {
        alert("A felhasználónévnek legalább 5 karakter hosszúnak kell lennie!");
        return;
    }

    // Jelszó minimum 8 karakter
    if (password.length < 8) {
        alert("A jelszónak legalább 8 karakter hosszúnak kell lennie!");
        return;
    }

    // Születési dátum ellenőrzés (minimum 10 év)
    if (!birthdate) {
        alert("Kérlek add meg a születési dátumod!");
        return;
    }

    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const monthCheck = now.getMonth() - birth.getMonth();

    if (monthCheck < 0 || (monthCheck === 0 && now.getDate() < birth.getDate())) {
        age--;
    }

    if (age < 10) {
        alert("A regisztrációhoz legalább 10 évesnek kell lenned!");
        return;
    }

    // Email ellenőrzés: legyen benne @ ÉS .
    if (!email.includes("@") || !email.includes(".")) {
        alert("Az email címnek tartalmaznia kell '@' és '.' jelet!");
        return;
    }

    // Telefonszám ellenőrzése (+ vagy -)
    if (!phone.includes("+") && !phone.includes("-")) {
        alert("A telefonszámnak tartalmaznia kell '+' vagy '-' jelet!");
        return;
    }

    // Nem választás kötelező
    if (!gender) {
        alert("Kérlek válaszd ki a nemed!");
        return;
    }

    // Kontinens kötelező
    if (continent === "") {
        alert("Kérlek válassz kontinenset!");
        return;
    }

    // Siker
    message.textContent = "Regisztráció sikeres!";
    message.style.color = "green";
};
