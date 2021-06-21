const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice'));
const max_questions = 4;

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];

let questions = [
    {
        question: 'Who is Sandras favourite?',
        choice1: 'Mag',
        choice2: 'Ash',
        choice3: 'Moo',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: "The tallest building in the world is located in which city?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanghai",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "What percent of American adults believe that chocolate milk comes from brown cows?",
        choice1: "20%",
        choice2: "18%",
        choice3: "7%",
        choice4: "33%",
        answer: 3,
    },
    {
        question: "Approximately what percent of U.S. power outages are caused by squirrels?",
        choice1: "10-20%",
        choice2: "5-10%",
        choice3: "15-20%",
        choice4: "30%-40%",
        answer: 1,
    }
]