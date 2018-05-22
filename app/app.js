jQuery(document).ready(function ($) {
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.prev').click(function () {
        moveLeft();
    });

    $('.next').click(function () {
        moveRight();
    });

});


/* quiz */

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
