//Select elements
const start = document.getElementById("start");
const start2 = document.getElementById("start2");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");

//Questions and Answers
let questions = [{
    question: "Who created the genophage?",
    choiceA: "Turians",
    choiceB: "Protheans",
    choiceC: "Salarians",
    choiceD: "Vorcha",
    correct: "C"
}, {
    question: "What side effects does Kaidan Alenko suffer from because of his L2 Biotic Implants?",
    choiceA: "Dizziness",
    choiceB: "Insomnia",
    choiceC: "Migraines",
    choiceD: "Tremors",
    correct: "C"
}, {
    question: "The Drell share which other race’s homeworld?",
    choiceA: "Salarians",
    choiceB: "Elcor",
    choiceC: "Hanar",
    choiceD: "Asari",
    correct: "C"
}, {
    question: "On what planet does Shepard first encounter the Asari scientist Liara?",
    choiceA: "Feros",
    choiceB: "Therom",
    choiceC: "Noveria",
    choiceD: "Tuchanka",
    correct: "B"
}, {
    question: "Who created the Geth?",
    choiceA: "Reapers",
    choiceB: "Quarians",
    choiceC: "Turians",
    choiceD: "Drell",
    correct: "B"
}, {
    question: "What is Samara's daughter, Morinth?",
    choiceA: "Justicar",
    choiceB: "Spectre",
    choiceC: "Ardat Yakshi",
    choiceD: "Commando",
    correct: "C"
}, {
    question: "What was the name of the Prothean V.I on Ilos?",
    choiceA: "Vigil",
    choiceB: "Glyph",
    choiceC: "EDI",
    choiceD: "Avina",
    correct: "A"
}, {
    question: "Who does Barla Von work for?",
    choiceA: "Blood Pack",
    choiceB: "Shadow Broker",
    choiceC: "Eclipse",
    choiceD: "The Consort",
    correct: "B"
}, {
    question: "Which of these is not the name of a nightclub found across the Mass Effect universe?",
    choiceA: "Flux",
    choiceB: "Purgatory",
    choiceC: "Dark Star",
    choiceD: "Inferno",
    correct: "D"
}, {
    question: "The Protheans are deities to the Hanar, what is their religious name?",
    choiceA: "The Collectors",
    choiceB: "The Enkindlers",
    choiceC: "The Old Gods",
    choiceD: "The Inspirits",
    correct: "B"
}, ];
let questions2 = [{
    question: "The Drell share which other race’s homeworld?",
    choiceA: "Salarians",
    choiceB: "Elcor",
    choiceC: "Hanar",
    choiceD: "Asari",
    correct: "C"
}, {
    question: "On what planet does Shepard first encounter the Asari scientist Liara?",
    choiceA: "Feros",
    choiceB: "Therom",
    choiceC: "Noveria",
    choiceD: "Tuchanka",
    correct: "B"
}, {
    question: "What is Samara's daughter, Morinth?",
    choiceA: "Justicar",
    choiceB: "Spectre",
    choiceC: "Ardat Yakshi",
    choiceD: "Commando",
    correct: "C"
}, {
    question: "What was the name of the Prothean V.I on Ilos?",
    choiceA: "Vigil",
    choiceB: "Glyph",
    choiceC: "EDI",
    choiceD: "Avina",
    correct: "A"
}, {
    question: "The Protheans are deities to the Hanar, what is their religious name?",
    choiceA: "The Collectors",
    choiceB: "The Enkindlers",
    choiceC: "The Old Gods",
    choiceD: "The Inspirits",
    correct: "B"
}, {
    question: "What is the oldest known species in the series?",
    choiceA: "Reapers",
    choiceB: "Rachni",
    choiceC: "Turians",
    choiceD: "Leviathan",
    correct: "D"
}, {
    question: "How much does Wrex weigh?",
    choiceA: "1000 lbs",
    choiceB: "800 lbs",
    choiceC: "700 lbs",
    choiceD: "600 lbs",
    correct: "B"
}, {
    question: "What do the Turians call the First Contact War?",
    choiceA: "Mass Relay war",
    choiceB: "Human contact war",
    choiceC: "The Relay 314 incident",
    choiceD: "Armistice day",
    correct: "C"
}, {
    question: "What mercenary group did Zaeed Massani and Vido Santiago start?",
    choiceA: "The Blood Pack",
    choiceB: "The Blue Suns",
    choiceC: "Eclipse",
    choiceD: "Talons",
    correct: "B"
}, {
    question: "What year is Mass Effect set?",
    choiceA: "2327",
    choiceB: "2183",
    choiceC: "2098",
    choiceD: "2156",
    correct: "B"
}, ];

//Variables
const lastQuestion = questions.length - 1;
const lastQuestion2 = questions2.length - 1;
let runningQuestion = 0;

//Show Question
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderQuestion2() {
    let q2 = questions2[runningQuestion];
    question.innerHTML = "<p>" + q2.question + "</p>";
    choiceA.innerHTML = q2.choiceA;
    choiceB.innerHTML = q2.choiceB;
    choiceC.innerHTML = q2.choiceC;
    choiceD.innerHTML = q2.choiceD;
}

//Start button to begin quiz
start.onclick = function () {
    startQuiz();
};
start2.onclick = function () {
    startQuiz2();
};

//Remove start button and show quiz section with questions
function startQuiz() {
    start.style.display = "none";
    start2.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

function startQuiz2() {
    start.style.display = "none";
    start2.style.display = "none";
    renderQuestion2();
    quiz.style.display = "block";
    renderProgress();
}
//Add colored div to progress bar with each question
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//Checks answer and loops next question until end
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        return window.location.assign('/end.html');
    }
}

function checkAnswer2(answer) {
    if (answer == questions2[runningQuestion].correct) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion2) {
        runningQuestion++;
        renderQuestion2();
    } else {
        return window.location.assign('/end.html');
    }
}

/*Changes progress bar color if correct or incorrect*/
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(14,185,254)";
    document.getElementById(runningQuestion).innerHTML = '<i class="fas fa-check"></i>';
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(230,24,9)";
    document.getElementById(runningQuestion).innerHTML = '<i class="fas fa-times"></i>';
}