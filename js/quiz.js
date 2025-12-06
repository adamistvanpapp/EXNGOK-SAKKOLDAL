// Kérdések listája

const questions = [
    {
        question: "Melyik bábú lép L-alakban?",
        answers: ["Bástya", "Huszár", "Futó", "Királynő"],
        correct: 1
    },
    {
        question: "Hogyan lép a futó?",
        answers: ["Vízszintesen", "Függőlegesen", "Átlósan", "Csak 1 mezőt"],
        correct: 2
    },
    {
        question: "Melyik a legértékesebb bábú?",
        answers: ["Gyalog", "Királynő", "Bástya", "Huszár"],
        correct: 1
    },
    {
        question: "Melyik 2 bábú tud sáncolni?",
        answers: ["Király,Bástya", "Király,Királynő", "Bástya,Bástya", "Gyalog,Gyalog"],
        correct: 0
    },
    {
        question: "Kinek van a legtöbb Elo-ja jelenleg?",
        answers: ["Garry Kasparov", "Hikaru Nakamura", "Polgár Judit", "Magnus Carlsen"],
        correct: 3
    },
    {
        question: "Melyik a legjobb lépés (fehér lép, könnyű)?",
        image: "media/quizkonnyu1.jpg",
        answers: ["Futó f8", "Királynő e6", "Királynő c7", "Gyalog e6"],
        correct: 1
    },
    {
        question: "Melyik a legjobb lépés (fehér lép, könnyű)?",
        image: "media/quizkonnyu2.jpg",
        answers: ["Királynő d6", "Gyalog e5", "Királynő e5", "Bástya f8"],
        correct: 0
    },
    {
        question: "Melyik a legjobb lépés (fehér lép, közepes)?",
        image: "media/quizkozepes1.jpg",
        answers: ["Huszár e7", "Futó f5", "Királynő h7", "Királynő h3"],
        correct: 2
    },
    {
        question: "Melyik a legjobb lépés (fehér lép, nehéz)?",
        image: "media/quiznehez1.jpg",
        answers: ["Királynő a6", "Királynő d4", "Huszár d4", "Bástya h6"],
        correct: 3
    },
    {
        question: "Melyik a legjobb lépés (fehér lép, nehéz)?",
        image: "media/quiznehez2.jpg",
        answers: ["Bástya d1", "Futó c5", "Gyalog f7", "Királynő h7"],
        correct: 3
    },
];


// Véletlenszerű sorrend a kérdésekhez
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // véletlen index 0..i
        [array[i], array[j]] = [array[j], array[i]];   // csere
    }
    return array;
}

shuffle(questions);

let current = 0; // aktuális kérdés index
let score = 0;   // elért pontszám

// HTML elemek referenciái
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const quizBox = document.getElementById("quiz-box");


// Kérdés betöltése

function loadQuestion() {
    let q = questions[current];
    questionEl.textContent = q.question;

    // Korábbi kép eltávolítása
    let oldImg = document.getElementById("question-image");
    if (oldImg) oldImg.remove();

    // Ha van kép, létrehozzuk a helyet neki
    if (q.image) {
        let imgEl = document.createElement("img");
        imgEl.id = "question-image";
        imgEl.src = q.image;
        imgEl.alt = "Kérdés kép";
        imgEl.style.maxWidth = "300px";
        imgEl.style.margin = "15px 0";
        imgEl.style.display = "block";
        imgEl.style.borderRadius = "8px";

        questionEl.insertAdjacentElement("afterend", imgEl);
    }

    // Válasz gombok létrehozása
    answersEl.innerHTML = ""; // előző gombok törlése
    q.answers.forEach((a, i) => {
        let btn = document.createElement("button");
        btn.textContent = a;
        btn.classList.add("answer-btn");
        btn.onclick = () => checkAnswer(i, btn); // gomb kattintás
        answersEl.appendChild(btn);
    });

    // Következő gomb elrejtése
    nextBtn.classList.add("hidden");
}

// Válasz ellenőrzése
function checkAnswer(i, btn) {
    let correct = questions[current].correct;

    if (i === correct) {
        btn.classList.add("correct"); 
        score++;
    } else {
        btn.classList.add("wrong");  
    }

    // Lezárjuk az összes gombot és kiemeljük a helyes választ
    document.querySelectorAll(".answer-btn").forEach(b => {
        b.disabled = true;
        if (questions[current].answers.indexOf(b.textContent) === correct) {
            b.classList.add("correct");
        }
    });

    // Mutatjuk a következő gombot
    nextBtn.classList.remove("hidden");
}

// Következő gomb esemény
nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

// Eredmény megjelenítése
function showResult() {
    quizBox.classList.add("hidden");      // kvíz elrejtése
    resultBox.classList.remove("hidden"); // eredmény megjelenítése
    scoreEl.textContent = `Elért pontszám: ${score} / ${questions.length}`;
}

// Első kérdés betöltése
loadQuestion();
