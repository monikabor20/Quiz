var allPoints = 0;
var answersBtn = document.querySelectorAll(".answer");
var checkAnswersBtn = document.querySelector(".check-answer");
var showGodAnswersBtn = document.querySelector(".good-answers");
var pointsContainer = document.querySelector(".points");
var pointsSpan = document.querySelector(".points span");
var startNew = document.querySelector(".start-new");

//function add points if answer is true
function addPoints() {
    this.classList.add("selected");
    if (this.classList.contains("correct")) {
        allPoints += 1;
    } else {
        allPoints += 0;
    }
}

//function show all points
function showPoints() {
    pointsSpan.innerHTML = allPoints;
    pointsContainer.classList.add("show");
}

//function show correct answers on green
function showCorrectAnswers() {
    for (var i = 0; i < answersBtn.length; i++) {
        answersBtn[i].classList.remove("selected");
        if (answersBtn[i].classList.contains("correct")) {
            answersBtn[i].classList.add("show-correct");
        }
    }
}

function clearAll() {
    pointsContainer.classList.remove('show');
    pointsContainer.classList.add('hide');

    allPoints = 0;
    for (var i = 0; i < answersBtn.length; i++) {
        answersBtn[i].classList.remove('selected', 'show-correct');
    }
}


for (var i = 0; i < answersBtn.length; i++) {
    answersBtn[i].addEventListener("click", addPoints);
}

checkAnswersBtn.addEventListener("click", showPoints);

startNew.addEventListener("click", clearAll);

showGodAnswersBtn.addEventListener("click", showCorrectAnswers);
