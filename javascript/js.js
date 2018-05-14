var answersBtn = document.querySelectorAll(".answer");
var checkAnswersBtn = document.querySelector(".check-answer");
var goodAnswersBtn = document.querySelector(".good-answer");
var pointsContainer = document.querySelector(".points");
var pointsSpan = document.querySelector(".points-span");
var clearBtn = document.querySelector('.clear');
var showGodAnswersBtn = document.querySelector(".good-answers");
var startNewGame = document.querySelector(".start-new");


var allPoints = 0;

//function add points if answer is true
function addPoints() {
    this.classList.add("selected");
    if (this.classList.contains("correct")) {
        allPoints += 1;
    } else {
        allPoints += 0;
    }
}

for (var i = 0; i < answersBtn.length; i++) {
    answersBtn[i].addEventListener("click", addPoints);
}

//function show all points
function showPoints() {
    pointsSpan.innerHTML = allPoints;
    pointsContainer.classList.add("show");
}

checkAnswersBtn.addEventListener("click", showPoints);

//function show correct answers on green
function showCorrectAnswers() {
    for (var i = 0; i < answersBtn.length; i++) {
        answersBtn[i].classList.remove("selected");
        if (answersBtn[i].classList.contains("correct")) {
            answersBtn[i].classList.add("show-correct");
        }
    }
}

showGodAnswersBtn.addEventListener("click", showCorrectAnswers)
