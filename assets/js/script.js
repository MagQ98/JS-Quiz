//Select elements
const start = document.getElementById("start");
const start2 = document.getElementById("start2");
const quiz = document.getElementById("quiz");
const quiz2 = document.getElementById("quiz2");
const question = document.getElementById("question");
const question2 = document.getElementById("question");
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
    choiceC: "Vorcha",
    choiceD: "Salarians",
    correct: "D"
}, {
    question: "What side effects does Kaidan Alenko suffer from because of his L2 Biotic Implants?",
    choiceA: "Dizziness",
    choiceB: "Insomnia",
    choiceC: "Migraines",
    choiceD: "Tremors",
    correct: "C"
}, {
    question: "Who created the Geth?",
    choiceA: "Reapers",
    choiceB: "Quarians",
    choiceC: "Turians",
    choiceD: "Drell",
    correct: "B"
}, {
    question: "Which member of Shepard’s squad was killed on Eden Prime?",
    choiceA: "Lt. Kaiden Alenko",
    choiceB: "Cpl. Richard L. Jenkins",
    choiceC: "Adml. David Anderson",
    choiceD: "Lt. Steve Cortez",
    correct: "B"
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
    question: "Who was Archangel?",
    choiceA: "Liara T’soni",
    choiceB: "Garrus Vakarian",
    choiceC: "Urdnot Wrex",
    choiceD: "Kaiden Alenko",
    correct: "B"
}, {
    question: "What was the name of the Spectre that Saren killed on Eden Prime?",
    choiceA: "Jondum Bau",
    choiceB: "Nihlus Kryik",
    choiceC: "Tela Vasir",
    choiceD: "Lonar Maerun",
    correct: "B"
}, {
    question: "Who is the Chief Medical Officer aboard the Normandy?",
    choiceA: "Dr. Saleon",
    choiceB: "Dr. Solus",
    choiceC: "Dr. Michel",
    choiceD: "Dr. Chakwas",
    correct: "D"
}, {
    question: "What is the game that can be played at Flux?",
    choiceA: "Poker",
    choiceB: "Blackjack",
    choiceC: "Quasar",
    choiceD: "Roulette",
    correct: "C"
},];
let questions2 = [{
    question: "What does 1 stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
}, {
    question: "What does 2 stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
}, {
    question: "What does 3 stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
}, {
    question: "What does 4 stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
}, {
    question: "What does 5 stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
},  {
    question: "What does 6 stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
}, {
    question: "What does 7 stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
}, {
    question: "What does 8 stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
}, {
    question: "What does 9 stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
}, {
    question: "What does 10 stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
},];

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
    startQuiz()
};
start2.onclick = function () {
    startQuiz2()
};

//removes start button and shows quiz section with questions
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
//Adds colored div to progress bar with each question
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
        renderQuestion()
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
        renderQuestion2()
    } else {
        return window.location.assign('/end.html');
    }
}

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(14,185,254)";
    document.getElementById(runningQuestion).innerHTML = '<i class="fas fa-check"></i>';
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(230,24,9)";
    document.getElementById(runningQuestion).innerHTML = '<i class="fas fa-times"></i>';
}

