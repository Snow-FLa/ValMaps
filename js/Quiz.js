const questions = [
    {
        image: "../images/Quiz1.png",
        answer: true
    },
    {
        image: "../images/Quiz2.png",
        answer: false
    },
    {
        image: "../images/Quiz3.png",
        answer: false
    },
    {
        image: "../images/Quiz4.png",
        answer: true
    },
    {
        image: "../images/Quiz5.png",
        answer: true
    },
    {
        image: "../images/Quiz6.png",
        answer: false
    },
    {
        image: "../images/Quiz7.png",
        answer: true
    },
    {
        image: "../images/Quiz8.png",
        answer: true
    },
    {
        image: "../images/Quiz9.png",
        answer: false
    },
    {
        image: "../images/Quiz10.png",
        answer: false
    }
];

let currentQuestionIndex = 0;

const questionImageElement = document.getElementById('question-image');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const resultElement = document.getElementById('result');

function showQuestion(question) {
    questionImageElement.src = question.image;
}

function checkAnswer(answer) {
    const correct = questions[currentQuestionIndex].answer;
    if (answer === correct) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            showQuestion(questions[currentQuestionIndex]);
        }, 1000);
    } else {
        setTimeout(() => {
            resultElement.textContent = "Finish!";
        }, 1000);
    }
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

showQuestion(questions[currentQuestionIndex]);