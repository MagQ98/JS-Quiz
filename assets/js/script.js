const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [
    {
        question : "Who created the genophage?",
        choiceA : "Turians",
        choiceB : "Protheans",
        choiceC : "Vorcha",
        choiceD : "Salarians",
        correct : "D"
    },{
        question : "What side effects does Kaidan Alenko suffer from because of his L2 Biotic Implants?",
        choiceA : "Dizziness",
        choiceB : "Insomnia",
        choiceC : "Migraines",
        choiceD : "Tremors",
        correct : "C"
    },{
        question : "The Drell share which other race’s homeworld?",
        choiceA : "Salarians",
        choiceB : "Elcor",
        choiceC : "Hanar",
        choiceD : "Asari",
        correct : "C"
    },{
        question : "On what planet does Shepard first encounter the Asari scientist Liara?",
        choiceA : "Feros",
        choiceB : "Therom",
        choiceC : "Noveria",
        choiceD : "Tuchanka",
        correct : "B"
    },{
        question : "Who created the Geth?",
        choiceA : "Reapers",
        choiceB : "Quarians",
        choiceC : "Turians",
        choiceD : "Drell",
        correct : "B"
    },{
        question : "What is Samara's daughter Morinth?",
        choiceA : "Justicar",
        choiceB : "Spectre",
        choiceC : "Ardat Yakshi",
        choiceD : "Commando",
        correct : "C"
    },{
        question : "What was the name of the Prothean V.I on Ilos?",
        choiceA : "Vigil",
        choiceB : "Glyph",
        choiceC : "EDI",
        choiceD : "Avina",
        correct : "A"
    },{
        question : "Who does Barla Von work for?",
        choiceA : "Blood Pack",
        choiceB : "Shadow Broker",
        choiceC : "Eclipse",
        choiceD : "The Consort",
        correct : "B"
    },{
        question : "Which Of These Is Not The Name Of A Nightclub Found Across The Trilogy?",
        choiceA : "Flux",
        choiceB : "Purgatory",
        choiceC : "Dark Star",
        choiceD : "Inferno",
        correct : "D"
    },{
        question : "The Protheans Are Deities To The Hanar; What Is Their Religious Name?",
        choiceA : "The Collectors",
        choiceB : "The Enkindlers",
        choiceC : "The Old Gods",
        choiceD : "The Inspirits",
        correct : "B"
    },
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        
        score++;
        
        answerIsCorrect();
    }else{
        
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{

      return window.location.assign('/end.html')
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(14,185,254)";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(230,24,9)";
};